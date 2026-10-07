// Conserva los enlaces anteriores y los dirige a la pantalla principal.
import { Redirect } from 'expo-router';

export default function ExploreRoute() {
  return <Redirect href="/" />;
}
