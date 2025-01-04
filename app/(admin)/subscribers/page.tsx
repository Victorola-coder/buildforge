"use client";

import axios from "axios";
import { toast } from "sonner";
import { useState, useEffect, useCallback } from "react";

export default function Subscribers() {
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [totalEmails, setTotalEmails] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPageUsers, setCurrentPageUsers] = useState<User[]>([]);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);

  const fetchUsers = useCallback(async (page: number, term: string = "") => {
    setIsLoading(true);
    try {
      const response = await axios.get<ApiResponse>(
        `/api/subscribe?page=${page}&limit=10&search=${term}`
      );
      const { subscribers, totalPages, totalSubscribers } = response.data;

      setUsers(subscribers || []);
      setCurrentPageUsers(subscribers || []);
      setTotalPages(totalPages || 1);
      setTotalEmails(totalSubscribers || 0);
    } catch (error: unknown) {
      console.error("Error fetching users:", error);
      const errorMessage =
        error instanceof Error && "response" in error
          ? (error as unknown as { response: { data: { message: string } } })
              .response?.data?.message
          : "Unable to connect to the database. Please check your database connection and try again.";
      toast.error(errorMessage);
      setUsers([]);
      setCurrentPageUsers([]);
      setTotalPages(1);
      setTotalEmails(0);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers(currentPage, searchTerm);
  }, [currentPage, searchTerm, fetchUsers]);

  const handleDelete = (email: string) => {
    setUserToDelete(email);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!userToDelete) return;

    // Optimistically update the UI
    const updatedUsers = users.filter((user) => user.email !== userToDelete);
    setUsers(updatedUsers);
    setIsModalOpen(false);
    setUserToDelete(null);

    try {
      const response = await fetch(`/api/subscribe`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: userToDelete }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.msg);
        // Refresh the list after successful deletion
        await fetchUsers(currentPage, searchTerm);
      } else {
        // Revert the change if the API call fails
        setUsers(users);
        toast.error(data.msg);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      // Revert the change if the API call fails
      setUsers(users);
      toast.error("An error occurred");
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setUserToDelete(null);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredUsers = currentPageUsers.filter((user: User) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderPaginationButtons = () => {
    const buttons: React.ReactNode[] = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    if (start > 1) {
      buttons.push(
        <button
          key="first-page"
          className="px-3 py-1 text-sm font-medium text-gray-500 bg-white rounded-md hover:bg-gray-100"
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
      if (start > 2) {
        buttons.push(<span key="start-ellipsis">...</span>);
      }
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={`page-${i}`}
          className={`px-3 py-1 text-sm font-medium rounded-md ${
            currentPage === i
              ? "bg-[#3C096C] text-white"
              : "text-gray-500 bg-white hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        buttons.push(<span key="end-ellipsis">...</span>);
      }
      buttons.push(
        <button
          key="last-page"
          className="px-3 py-1 text-sm font-medium text-gray-500 bg-white rounded-md hover:bg-gray-100"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="px-[20px] py-[32px] grid place-items-center bg-white shadow">
        <h1 className="text-[40px] leading-[25.78px] text-[#3C096C] font-bold font-cab md:text-[40px] md:leading-[30.47px]">
          buildforge Subscribers
        </h1>
      </header>
      <div className="w-full px-4 py-8">
        <div className="w-full max-w-[1200px] mx-auto bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-row items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Total Subscribers:{" "}
                <span className="text-[#3C096C]">{totalEmails}</span>
              </h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search by email"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="px-3 py-2 border text-main transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3C096C]"
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">S/N</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {isLoading ? (
                  <tr key="loading">
                    <td colSpan={3} className="py-4 text-center">
                      <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3C096C]"></div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {(currentPage - 1) * 10 +
                          filteredUsers.indexOf(user) +
                          1}
                      </td>
                      <td className="py-3 px-6 text-left">{user.email}</td>
                      <td className="py-3 px-6 text-center">
                        <button
                          className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                          onClick={() => handleDelete(user.email)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-1 space-y-2 py-4">
            <button
              className="px-3 py-1 text-sm font-medium text-gray-500 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className="flex flex-wrap justify-center items-center space-x-1">
              {renderPaginationButtons()}
            </div>
            <button
              className="px-3 py-1 text-sm font-medium text-gray-500 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-semibold text-gray-800">
              Confirm Deletion
            </h2>
            <p className="mt-2 text-gray-600">
              Are you sure you want to delete this user?
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={confirmDelete}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                onClick={cancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
