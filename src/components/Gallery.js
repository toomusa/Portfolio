
const slides = [
  require("../assets/images/Meritocracy/1_Intro.jpg"),
  require("../assets/images/Meritocracy/2_Lay_Intro.jpg"),
  require("../assets/images/Meritocracy/3_Meritocracy.jpg"),
  require("../assets/images/Meritocracy/4_CRS.jpg"),
  require("../assets/images/Meritocracy/5_Cloud_Review.jpg"),
  require("../assets/images/Meritocracy/6_PRvsCR.jpg"),
  require("../assets/images/Meritocracy/7_Researchers.jpg"),
  require("../assets/images/Meritocracy/8_Businesses.jpg"),
  require("../assets/images/Meritocracy/9_Educators.jpg"),
  require("../assets/images/Meritocracy/10_Legislators.jpg"),
  require("../assets/images/Meritocracy/11_CRStech.jpg"),
  require("../assets/images/Meritocracy/12_APC.jpg"),
  require("../assets/images/Meritocracy/13_AIT.jpg"),
  require("../assets/images/Meritocracy/14_RDM.jpg"),
  require("../assets/images/Meritocracy/15_Open_Science.jpg"),
  require("../assets/images/Meritocracy/16_Big_Data.jpg"),
  require("../assets/images/Meritocracy/17_Online_Ed.jpg"),
  require("../assets/images/Meritocracy/18_ParDem.jpg"),
  require("../assets/images/Meritocracy/19_Final.jpg"),
  require("../assets/images/Meritocracy/20_Our_Quest.jpg"),
]

export const videos = [
  {
    src: "https://www.youtube.com/watch?v=Zm9F8EbLCX0",
    modal: false,
    id: 10,
    title: "Milennials and the Platinum Rule",
    caption: "A Millennial perspective on the new generation in the workforce and what can business leaders do to improve performance on a personal and organizational level.",
    caption2: "Recorded March 14, 2017."
    // caption2: "Recorded March 14, 2017, at the 'Getting Ready for Millennials to Run the World' event hosted in partnership with Dominican University's Business Edge Briefings, North Bay Leadership Council, and the CEO Club of Marin."
  },
  {
    src: "https://www.youtube.com/watch?v=L57pnOGGP9U",
    modal: false,
    id: 20,
    title: "Meritocracy in Academic Publishing",
    caption: "A discussion of the concept behind Meritocracy and the Cloud Review System aimed to modernize academic peer review and publishing.",
    caption2: "Recorded Feb 4, 2012."
  }
]

export const files = {
  src: require("../assets/files/A_Framework_for_Sustainability.pdf"),
  image: require("../assets/images/Sustainability.png"),
  id: 30,
  title: "A Framework for Sustainability",
  caption: "A proposal for a common definition of sustainability that serves as a diagnostic framework to design and evaluate for sustainability."
}

export const gallery = {
  id: 40,
  title: "Cloud Review - Modern Science",
  caption: "Summary of proposal for Cloud Reviewed Science, including the premise of the problem, details of the product, and benefits to academics, businesses, educators, and legislators.",
  modal: false,
  slides: slides,
  image: require("../assets/images/Cloud_Review.png")
}