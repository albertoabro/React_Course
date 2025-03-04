import { BtnMyLocation } from "../components/BtnMyLocation"
import { MapView } from "../components/MapView"
import { ReactLogo } from "../components/ReactLogo"
import { Searchbar } from "../components/Searchbar"


export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <Searchbar />
      <ReactLogo />
    </div>
  )
}
