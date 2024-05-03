const filterKey = [
  { title: "show all", key: "*" },
  { title: "contract", key: "contract" },
  { title: "dapp", key: "dapp" },
  { title: "nft", key: "nft" },
  { title: "indexer", key: "indexer" },
  { title: "subgraph", key: "subgraph" },
  { title: "bot", key: "bot" },
  { title: "web", key: "web" },
];

const projectData = [
  {
    type: ["web"],
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
    type: ["contract", "nft"],
    role: "Smart contract and Rust developer",
    skills: ["Cosmos SDK", "Nibiru chain", "Rust"],
    imgUrl: "imgs/works/work5.png",
    summary: "Customizing NFT",
    siteUrl: "https://github.com/friend413/nibiru-customize-nft",
  },
  {
    type: ["dapp"],
    role: "Solana web3 developer",
    skills: ["Solana", "Web3", "Rust", "Typescript"],
    imgUrl: "imgs/works/work6.png",
    summary: "Solana Token Creator",
    siteUrl: "https://github.com/friend413/LiveTokenCreator",
  },
  {
    type: ["indexer"],
    role: "Chain indexer developer",
    skills: ["Chain Indexer", "Rust", "EVM"],
    imgUrl: "imgs/works/work7.png",
    summary: "Evm chain indexer and web api",
    siteUrl: "https://github.com/friend413/evm-indexer",
  },
  {
    type: ["bot"],
    role: "Discord bot and backend developer",
    skills: ["Discord bot", "Nodejs"],
    imgUrl: "imgs/works/work3.png",
    summary: "Discord bot for sei server",
    siteUrl: "https://github.com/friend413/DiscordBotGuide",
  },
];

export { filterKey, projectData };
