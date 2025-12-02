import BookingList from "@/components/BookingList";
import { getHostBookings } from "@/lib/bookingService";

export default async function HostBookingsPage({ params }: any) {
  const { hostId } = params;
  const bookings = await getHostBookings(hostId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Host Bookings</h1>
      <BookingList bookings={bookings} />
    </div>
  );
}