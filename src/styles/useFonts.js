import { 
    useFonts,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_800ExtraBold
  } from "@expo-google-fonts/poppins";
  
  export default function useCustomFonts() {
    const [fontsLoaded] = useFonts({
      Poppins_700Bold,
      Poppins_500Medium,
      Poppins_400Regular,
      Poppins_800ExtraBold
    });
  
    return fontsLoaded;
  }
  