import { ImageSlider } from "../ImageSlider/Imageslider"
import all from "../../assets/Images/Hero/all.jpg"
import kids from "../../assets/Images/Hero/kids.jpg"
import mens from "../../assets/Images/Hero/mens.jpg"
import womens from "../../assets/Images/Hero/womens.jpg"

const IMAGES = [
  { url: all, alt: "Car One" },
  { url: kids, alt: "Car Two" },
  { url: mens, alt: "Car Three" },
  { url: womens, alt: "Car Four" },
]

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
        height: "550px",
        position: "relative"
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>
  )
}