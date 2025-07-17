import React, { useState } from "react";
import { Settings, X, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminAccess: React.FC = () => {
  const [showPanel, setShowPanel] = useState(false);
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    navigate("/admin");
  };

  return (
    <>
      {/* Floating Admin Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowPanel(true)}
          className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110"
          title="Admin Access"
        >
          <Settings size={24} />
        </button>
      </div>

      {/* Admin Access Panel */}
      {showPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Admin Access
                  </h2>
                  <p className="text-sm text-gray-500">
                    Dashboard Administrator
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPanel(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-medium text-purple-900 mb-2">
                  Fitur Admin:
                </h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Manajemen Mobil</li>
                  <li>• Manajemen User</li>
                  <li>• Analytics & Statistik</li>
                  <li>• Overview Dashboard</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleAdminAccess}
                  className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Masuk ke Admin
                </button>
                <button
                  onClick={() => setShowPanel(false)}
                  className="px-4 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminAccess;
