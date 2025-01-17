import { Navigate, Route, Routes } from "react-router"
import { Navbar } from "@/components/Navbar"
import { MarvelPage } from "@/heroes/pages/MarvelPage"
import { DcPage } from "@/heroes/pages/DcPage"
import { HeroPage } from "@/heroes/pages/HeroPage"
import { Search } from "@/heroes/components/Search"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="marvel" element={ <MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="search" element={<Search />} />
                <Route path="hero/:id" element={<HeroPage />} />

                <Route path="/" element={<Navigate to={"/marvel"} />} />
            </Routes>
      </div>
    </>
  )
}

