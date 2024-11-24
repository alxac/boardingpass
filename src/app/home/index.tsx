import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
import { Flight } from '@/components/flight/Flight';
import { Ionicons } from "@expo/vector-icons"
import { colors } from '@/styles/colors';
import { Info } from '@/components/info/Info';
import QRCode from 'react-native-qrcode-svg';
import { LinearGradient } from 'expo-linear-gradient';
import LineSvg from '@/components/LineSvg';

export default function BoardingPass() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require("@/assets/cover.jpeg")}>
        <LinearGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.8)"]} style={styles.gradient} />
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label='São Paulo' value='GRU' />

            <View style={styles.duration}>
              <Ionicons name='airplane-sharp' size={32} color={colors.black} />
              <Text style={styles.hours}>9 h 45 min</Text>
            </View>
            <Flight label='Nova York' value='JFK' />
          </View>

          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>Alexsander Alves</Text>

          <View style={styles.details}>
            <View style={styles.inline}>
              <Info label='Data' value='17 de Nov.' />
              <Info label='Embarque' value='17:25' />
            </View>
          </View>
        </View>

        <LineSvg />

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label='Voo' value='XY 607' />
              <Info label='Assento' value='29G' />
            </View>

            <View style={styles.inline}>
              <Info label='Terminal' value='3' />
              <Info label='Portão' value='39' />
            </View>


          </View>

          <QRCode value='boarding code' size={130} />
        </View>

      </View>
    </View>
  );
}


