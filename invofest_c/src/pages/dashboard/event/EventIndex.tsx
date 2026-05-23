import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Event = {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
};

export default function EventIndex() {
  const [events, setEvents] = useState<Event[]>([]);

  const getEvents = async () => {
    try {
      const response = await fetch(
        "https://uts-backend-197igdykg-rafainan31s-projects.vercel.app/events"
      );

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
    const confirmDelete = confirm(
      "Yakin ingin menghapus event ini?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://uts-backend-197igdykg-rafainan31s-projects.vercel.app/${id}`,
        {
          method: "DELETE",
        }
      );

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
          <h1 className="text-3xl font-bold">
            Event
          </h1>

          <p>
            Daftar event yang tersedia
          </p>
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
              <div className="flex items-center gap-4">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-20 h-20 rounded-xl object-cover border"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-xl bg-gray-200 flex items-center justify-center text-gray-500">
                    No
                  </div>
                )}

                <div>
                  <h2 className="text-lg font-semibold">
                    {event.title}
                  </h2>

                  <p className="text-gray-500">
                    Category : {event.category}
                  </p>

                  <p className="text-gray-500">
                    Date : {event.date}
                  </p>

                  <p className="text-gray-500">
                    Location : {event.location}
                  </p>

                  <p className="text-sm text-gray-400">
                    Event ID : {event.id}
                  </p>
                </div>
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
            <h2 className="text-lg font-semibold">
              Belum ada event
            </h2>

            <p className="text-gray-400 mt-2">
              Silakan tambahkan event baru
            </p>
          </div>
        )}
      </div>
    </div>
  );
}