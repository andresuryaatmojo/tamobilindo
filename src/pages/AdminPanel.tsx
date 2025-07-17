import React, { useState, useEffect } from "react";
import {
  Car,
  Users,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  BarChart3,
  DollarSign,
  Calendar,
  MapPin,
} from "lucide-react";
import MobilEntityModal from "../components/admin/MobilEntityModal";
import UserEntityModal from "../components/admin/UserEntityModal";
import StatsCard from "../components/admin/StatsCard";
import SimpleChart from "../components/admin/SimpleChart";

export interface MobilEntity {
  mobilId: string;
  brand: string;
  model: string;
  tahun: number;
  harga: number;
  status: "active" | "sold" | "pending";
  deskripsi?: string;
  spesifikasi?: object;
  lokasi?: string;
  views?: number;
  tanggalInput?: string;
}

export interface UserEntity {
  userId: string;
  nama: string;
  email: string;
  telepon?: string;
  alamat?: string;
  role: "user" | "admin" | "dealer";
  status: "active" | "inactive" | "pending";
  tanggalDaftar: string;
  lastLogin: string;
}

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "cars" | "users" | "analytics"
  >("overview");
  const [cars, setCars] = useState<MobilEntity[]>([]);
  const [users, setUsers] = useState<UserEntity[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  // Modal states
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Mock data untuk dashboard
  useEffect(() => {
    // Simulasi data mobil
    const mockCars: MobilEntity[] = [
      {
        mobilId: "1",
        brand: "Toyota",
        model: "Avanza",
        tahun: 2022,
        harga: 250000000,
        status: "active",
        lokasi: "Jakarta Selatan",
        views: 156,
        tanggalInput: "2024-01-15",
      },
      {
        mobilId: "2",
        brand: "Honda",
        model: "Brio",
        tahun: 2021,
        harga: 180000000,
        status: "sold",
        lokasi: "Bandung",
        views: 89,
        tanggalInput: "2024-01-10",
      },
      {
        mobilId: "3",
        brand: "Suzuki",
        model: "Ertiga",
        tahun: 2023,
        harga: 220000000,
        status: "active",
        lokasi: "Surabaya",
        views: 234,
        tanggalInput: "2024-01-20",
      },
      {
        mobilId: "4",
        brand: "Daihatsu",
        model: "Xenia",
        tahun: 2020,
        harga: 150000000,
        status: "pending",
        lokasi: "Medan",
        views: 67,
        tanggalInput: "2024-01-25",
      },
      {
        mobilId: "5",
        brand: "Mitsubishi",
        model: "Xpander",
        tahun: 2022,
        harga: 280000000,
        status: "active",
        lokasi: "Semarang",
        views: 198,
        tanggalInput: "2024-01-18",
      },
    ];

    // Simulasi data user
    const mockUsers: UserEntity[] = [
      {
        userId: "1",
        nama: "Budi Santoso",
        email: "budi@email.com",
        telepon: "081234567890",
        alamat: "Jl. Raya No. 123, Jakarta",
        role: "dealer",
        status: "active",
        tanggalDaftar: "2023-12-01",
        lastLogin: "2024-02-10",
      },
      {
        userId: "2",
        nama: "Sari Wijaya",
        email: "sari@email.com",
        telepon: "089876543210",
        alamat: "Jl. Merdeka No. 45, Bandung",
        role: "user",
        status: "active",
        tanggalDaftar: "2024-01-05",
        lastLogin: "2024-02-05",
      },
      {
        userId: "3",
        nama: "Ahmad Rahman",
        email: "ahmad@email.com",
        telepon: "081122334455",
        alamat: "Jl. Sudirman No. 78, Jakarta",
        role: "dealer",
        status: "pending",
        tanggalDaftar: "2024-01-20",
        lastLogin: "2024-02-15",
      },
      {
        userId: "4",
        nama: "Dewi Kusuma",
        email: "dewi@email.com",
        telepon: "082233445566",
        alamat: "Jl. Gatot Subroto No. 90, Surabaya",
        role: "user",
        status: "inactive",
        tanggalDaftar: "2023-11-15",
        lastLogin: "2023-12-20",
      },
      {
        userId: "5",
        nama: "Rudi Hartono",
        email: "rudi@email.com",
        telepon: "083344556677",
        alamat: "Jl. Diponegoro No. 10, Semarang",
        role: "admin",
        status: "active",
        tanggalDaftar: "2023-10-01",
        lastLogin: "2024-02-18",
      },
    ];

    setCars(mockCars);
    setUsers(mockUsers);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "sold":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800";
      case "dealer":
        return "bg-blue-100 text-blue-800";
      case "user":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || car.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const filteredUsers = users.filter((user) => {
    return (
      user.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Modal handlers
  const handleAddCar = () => {
    setSelectedCar(null);
    setIsCarModalOpen(true);
  };

  const handleEditCar = (car: any) => {
    setSelectedCar(car);
    setIsCarModalOpen(true);
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsUserModalOpen(true);
  };

  const handleEditUser = (user: any) => {
    setSelectedUser(user);
    setIsUserModalOpen(true);
  };

  const handleSaveCar = (carData: any) => {
    if (selectedCar) {
      // Update existing car
      setCars((prev) =>
        prev.map((car) => (car.mobilId === selectedCar.mobilId ? carData : car))
      );
    } else {
      // Add new car
      setCars((prev) => [...prev, carData]);
    }
  };

  const handleSaveUser = (userData: any) => {
    if (selectedUser) {
      // Update existing user
      setUsers((prev) =>
        prev.map((user) =>
          user.userId === selectedUser.userId ? userData : user
        )
      );
    } else {
      // Add new user
      setUsers((prev) => [...prev, userData]);
    }
  };

  const stats = {
    totalCars: cars.length,
    activeCars: cars.filter((car) => car.status === "active").length,
    soldCars: cars.filter((car) => car.status === "sold").length,
    totalUsers: users.length,
    activeUsers: users.filter((user) => user.status === "active").length,
    totalViews: cars.reduce((sum, car) => sum + (car.views || 0), 0),
    totalValue: cars.reduce((sum, car) => sum + car.harga, 0),
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Statistik Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Mobil</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalCars}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total User</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalUsers}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalViews}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Nilai</p>
              <p className="text-lg font-bold text-gray-900">
                {formatPrice(stats.totalValue)}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Grafik dan Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Status Mobil</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Aktif</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${(stats.activeCars / stats.totalCars) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{stats.activeCars}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Terjual</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width: `${(stats.soldCars / stats.totalCars) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{stats.soldCars}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h3>
          <div className="space-y-3">
            {cars.slice(0, 5).map((car) => (
              <div key={car.mobilId} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {car.brand} {car.model}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(car.tanggalInput || "")}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                    car.status
                  )}`}
                >
                  {car.status === "active"
                    ? "Aktif"
                    : car.status === "sold"
                    ? "Terjual"
                    : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCarsManagement = () => (
    <div className="space-y-6">
      {/* Header dengan Search dan Filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Cari mobil..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            <option value="all">Semua Status</option>
            <option value="active">Aktif</option>
            <option value="sold">Terjual</option>
            <option value="pending">Pending</option>
          </select>
          <button
            onClick={handleAddCar}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Tambah Mobil
          </button>
        </div>
      </div>

      {/* Tabel Mobil */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobil
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Harga
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lokasi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCars.map((car) => (
                <tr key={car.mobilId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {car.brand} {car.model}
                      </div>
                      <div className="text-sm text-gray-500">{car.tahun}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatPrice(car.harga)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {car.lokasi}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                        car.status
                      )}`}
                    >
                      {car.status === "active"
                        ? "Aktif"
                        : car.status === "sold"
                        ? "Terjual"
                        : "Pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {car.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEditCar(car)}
                        className="text-green-600 hover:text-green-900"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderUsersManagement = () => (
    <div className="space-y-6">
      {/* Header dengan Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Cari user..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
        <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export Data
        </button>
      </div>

      {/* Tabel User */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bergabung
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jumlah Mobil
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.userId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {user.nama}
                      </div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getRoleColor(
                        user.role
                      )}`}
                    >
                      {user.role === "admin"
                        ? "Admin"
                        : user.role === "dealer"
                        ? "Dealer"
                        : "User"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status === "active"
                        ? "Aktif"
                        : user.status === "inactive"
                        ? "Nonaktif"
                        : "Pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(user.tanggalDaftar)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {/* Assuming carsCount is not directly available in UserEntity,
                        but we can calculate it based on the number of cars
                        where the user is the seller or owner.
                        For now, we'll just show a placeholder or remove if not needed. */}
                    -
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Performa Bulanan</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Mobil Terjual</span>
              <span className="text-lg font-semibold text-green-600">+12%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Pendapatan</span>
              <span className="text-lg font-semibold text-blue-600">+8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">User Baru</span>
              <span className="text-lg font-semibold text-purple-600">
                +15%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Top Brand</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Toyota</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium">75%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Honda</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium">60%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Suzuki</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium">45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Mobil baru ditambahkan</p>
              <p className="text-xs text-gray-500">
                Toyota Avanza 2023 ditambahkan oleh Budi Santoso
              </p>
            </div>
            <span className="text-xs text-gray-500">2 jam yang lalu</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Mobil terjual</p>
              <p className="text-xs text-gray-500">
                Honda Brio 2021 terjual dengan harga Rp 180.000.000
              </p>
            </div>
            <span className="text-xs text-gray-500">5 jam yang lalu</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">User baru mendaftar</p>
              <p className="text-xs text-gray-500">
                Sari Wijaya mendaftar sebagai dealer
              </p>
            </div>
            <span className="text-xs text-gray-500">1 hari yang lalu</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
          <p className="text-gray-600 mt-2">
            Kelola website marketplace mobil Indonesia
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "overview", label: "Overview", icon: BarChart3 },
                { id: "cars", label: "Manajemen Mobil", icon: Car },
                { id: "users", label: "Manajemen User", icon: Users },
                { id: "analytics", label: "Analytics", icon: TrendingUp },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-pink-500 text-pink-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "cars" && renderCarsManagement()}
          {activeTab === "users" && renderUsersManagement()}
          {activeTab === "analytics" && renderAnalytics()}
        </div>
      </div>

      {/* Modals */}
      <MobilEntityModal
        isOpen={isCarModalOpen}
        onClose={() => setIsCarModalOpen(false)}
        mobilEntity={selectedCar}
        onSave={handleSaveCar}
      />

      <UserEntityModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        userEntity={selectedUser}
        onSave={handleSaveUser}
      />
    </div>
  );
};

export default AdminPanel;
