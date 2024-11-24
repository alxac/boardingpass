import BoardingPass from '@/app/home';
import { StatusBar } from "expo-status-bar";
import useCustomFonts from "@/styles/useFonts";

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) return null

  return (<>
    <StatusBar style="light" backgroundColor="transparent" translucent />
    <BoardingPass />
  </>);
}


