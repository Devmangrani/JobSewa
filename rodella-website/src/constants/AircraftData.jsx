import droneImageUrl1 from "./../assets/images/design.jpg";
import droneImageUrl2 from "./../assets/images/2.png";
import MainBgImg from "./../assets/images/aircraftsBG.jpg";
import droneImageUrl3 from "./../assets/images/fixed-wing1.png"
import droneImageUrl4 from "./../assets/images/fixed-wing2.jpg"

 const cards = [

    {
        url: MainBgImg,
        title: "Sky Weaver",
        id: 1,
        flightTime: "45 Minutes",
        TransmissionRange: "15 KM",
        LiveFeed: "4k/60fps",
        Positioning: "Accurate Positioning"
    },
    {
        url: droneImageUrl2,
        title: "Nimbus Scout",
        id: 2,
        flightTime: "1 Hour",
        TransmissionRange: "25 KM",
        LiveFeed: "2k/60fps",
        Positioning: "Precise Location"
    },

    {
        url: droneImageUrl3,
        title: "Aero Phantom",
        id: 3,
        flightTime: "45 Hours",
        TransmissionRange: "95 KM",
        LiveFeed: "8k/60fps",
        Positioning: "Ground Control"
    },

    {
        url: MainBgImg,
        title: "Vector Glide",
        id: 4,
        flightTime: "15 Minutes",
        TransmissionRange: "10 KM",
        LiveFeed: "1k/60fps",
        Positioning: "Environmental Awareness"
    },

    {
        url:droneImageUrl1,
        title: "Echo Raptor",
        id: 5,
        flightTime: "125 Minutes",
        TransmissionRange: "30 KM",
        LiveFeed: "4k/30fps",
        Positioning: "Underwater Detection"
    },

    {
        url: droneImageUrl4,
        title: "Zenith Eye",
        id: 6,
        flightTime: "45 Hours",
        TransmissionRange: "120 KM",
        LiveFeed: "16k/120fps",
        Positioning: "Heat Signature Detection"
    },

];

export default cards;