const filterKey = [
  { title: "show all", key: "*" },
  { title: "contract", key: "contract" },
  { title: "web3", key: "web3" },
  { title: "web2", key: "web2" },
  { title: "design", key: "design" },
  { title: "bot", key: "bot" }
];

const projectData = [
  {
    type: ["web2", "design"],
    role: "Frontend Developer",
    skills: ["React"],
    imgUrl: "imgs/works/work1.png",
    summary:
      "Landing page: this is my portfolio",
    siteUrl: "",
  },
  {
    type: ["contract", "nft"],
    role: "Smart contract and Rust developer",
    skills: ["Cosmos SDK", "Sei chain", "Rust"],
    imgUrl: "imgs/works/work2.png",
    summary: "NFT Raffle",
    siteUrl: "https://www.sei.ninja/",
  },
  {
    type: ["bot"],
    role: "Discord bot and backend developer",
    skills: ["Discord bot", "Nodejs"],
    imgUrl: "imgs/works/work3.png",
    summary: "Discord bot for sei server",
    siteUrl: "Application Id: 1209805546262364210",
  },
  {
    type: ["web2", "design"],
    role: "Frontend Developer and Designer",
    skills: ["React", "Figma"],
    imgUrl: "imgs/works/work4.png",
    summary:
      "Business card test project",
    siteUrl: "https://businesscardmaker.vercel.app/",
  },
];

export { filterKey, projectData };
