import LandingPage from "@/src/client/components/LandingPage";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Flight Booking app</title>
				<meta name='description' content='Flight, Booking' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<LandingPage />
		</>
	);
}
