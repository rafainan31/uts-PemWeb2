import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../../service/Api";

type Event = {
  id: number;
  name: string;
  categoryId: number;
  location: string;
  dateEvent: string;
  description: string;
  createdAt?: string;
};

export default function EventIndex() {
  const [events, setEvents] = useState<Event[]>([]);

  const getEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);

      const data = await response.json();

      setEvents(Array.isArray(data) ? data : data.data);
    } catch (error) {
      console.log(error);
      alert("Gagal mengambil data event");
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus event ini?");

    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_BASE_URL}/events/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Event gagal dihapus");
        return;
      }

      alert(result.message || "Event berhasil dihapus");
      getEvents();
    } catch (error) {
      console.log(error);
      alert("Event gagal dihapus");
    }
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Event</h1>
          <p>Daftar event yang tersedia</p>
        </div>

        <Link
          to="/dashboard/event/create"
          className="bg-red-700 text-white px-5 py-3 rounded-xl"
        >
          + Tambah Event
        </Link>
      </div>

      <div className="grid gap-4">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="bg-white border rounded-2xl p-5 flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{event.name}</h2>

                <p className="text-gray-500">
                  Category ID : {event.categoryId}
                </p>

                <p className="text-gray-500">
                  Tanggal :{" "}
                  {new Date(event.dateEvent).toLocaleDateString("id-ID")}
                </p>

                <p className="text-gray-500">
                  Lokasi : {event.location}
                </p>

                <p className="text-gray-500">
                  Deskripsi : {event.description}
                </p>

                <p className="text-sm text-gray-400">
                  Event ID : {event.id}
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/dashboard/event/edit/${event.id}`}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white border rounded-2xl p-10 text-center">
            <h2 className="text-lg font-semibold">Belum ada event</h2>
            <p className="text-gray-400 mt-2">
              Silakan tambahkan event baru
            </p>
          </div>
        )}
      </div>
    </div>
  );
}