const team = [
  {
    name: "Henry Weng",
    positions: ["Co-founder", "CEO", "Co-Chairman"],
    linkedin: "https://www.linkedin.com/in/henry-weng/",
    email: "admin@theyei.org",
  },
  {
    name: "Ian Chen",
    positions: ["Co-founder", "COO", "President", "Co-Chairman"],
    linkedin: "https://www.linkedin.com/in/iandchen/",
  },
  {
    name: "Aryan Shah",
    positions: ["Executive Board Member", "VP of Marketing"],
    linkedin: "https://www.linkedin.com/in/aryan-shah1",
  },
  {
    name: "Cheryl Wu",
    positions: ["Executive Board Member", "VP of Events"],
    linkedin: "https://www.linkedin.com/in/cheryl-wu-ba12801b1/",
  },
  {
    name: "Helena Su",
    positions: ["Executive Board Member", "VP of Resources"],
    linkedin: "https://www.linkedin.com/in/helena-su-063965193",
  },
  {
    name: "Andy Chen",
    positions: ["Executive Board Member", "VP of Leadership"],
    linkedin: "https://www.linkedin.com/in/andy-chen-82ba6b1a9/",
  },
  {
    name: "Anishka Banerjee",
    positions: ["Executive Board Member", "VP of Finance"],
    linkedin: "https://www.linkedin.com/in/anishka-banerjee-657775171/",
  },
  {
    name: "Marcus Kuo",
    positions: ["Executive Board Member", "Human Resources Manager"],
    linkedin: "https://www.linkedin.com/in/marcus-kuo-b9a4281aa/",
  },
  {
    name: "Anushka De",
    positions: ["Executive Board Member", "Director of Multimedia"],
    linkedin: "https://www.linkedin.com/in/anushkadde/",
  },
  {
    name: "Arun Balaji",
    positions: ["Executive Board Member", "Director of Expansion"],
  },
  {
    name: "Parth Asawa",
    positions: ["Executive Board Member", "Director of FLIP"],
    linkedin: "https://www.linkedin.com/in/pgasawa/",
  },
  {
    name: "Rajvir Kohli",
    positions: [
      "Executive Board Member",
      "Director of EARN",
      "Regional Ambassador",
    ],
    linkedin: "https://www.linkedin.com/in/rajvir-kohli-b207781a8/",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1599677463/yei-website/team/rajvir-kohli.jpg",
  },
  {
    name: "Mason Wang",
    positions: ["Director of Technology"],
    linkedin: "https://www.linkedin.com/in/mason-wang/",
    github: "http://github.com/MasonWang025",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1599418850/yei-website/team/mason-wang.png",
  },
  {
    name: "June Wang",
    positions: ["Grant Coordinator"],
    linkedin: "https://www.linkedin.com/in/june-wang/",
  },
  {
    name: "Benjamin Chen",
    positions: ["Fundraising Coordinator"],
    linkedin: "https://www.linkedin.com/in/benjamin-chen-60584a157/",
  },
  {
    name: "Selina Chen",
    positions: ["Graphic Designer"],
    linkedin: "https://www.linkedin.com/in/selina-chen-4a97831a2",
  },
  {
    name: "Charlotte Lau",
    positions: ["Graphic Designer"],
    linkedin: "https://www.linkedin.com/in/charlotte-lau-8b77421b2/",
  },
  {
    name: "Sajiv Shah",
    positions: ["Marketing Specialist"],
    linkedin: "https://www.linkedin.com/in/sajiv-shah-b86303169/",
  },
  {
    name: "Amy Zhou",
    positions: ["Marketing Specialist"],
    linkedin: "http://linkedin.com/in/amy-zhou-933536181/",
  },
  {
    name: "Benjamin Bray",
    positions: ["Marketing Specialist"],
    linkedin: "https://www.linkedin.com/in/benjamin-bray-6aa9371a3/",
  },
  {
    name: "Saachi Kumar",
    positions: ["Curriculum Designer"],
    linkedin: "https://www.linkedin.com/in/saachi-kumar/",
  },
  {
    name: "Francis Chua",
    positions: ["Senior Curriculum Developer"],
    linkedin: "https://www.linkedin.com/in/francis-chua-29b68a1b6/",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1599677464/yei-website/team/francis-chua.jpg",
  },
  {
    name: "Ethan Lin",
    positions: ["Testing Developer", "Curriculum Designer"],
    linkedin: "https://www.linkedin.com/in/ethan-lin-a93ab7172/",
  },
  {
    name: "Darion Phan",
    positions: ["Testing Developer"],
    linkedin: "https://www.linkedin.com/in/darion-phan/",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1599677463/yei-website/team/darion-phan.jpg",
  },
  {
    name: "Sanjit Pingili",
    positions: ["Curriculum Designer", "Quality Control"],
    linkedin: "http://linkedin.com/in/sanjit-pingili-14b04a1aa/",
  },

  {
    name: "Alysa Xu",
    positions: ["Events Coordinator"],
    linkedin: "https://www.linkedin.com/in/alysa-xu-06bba21aa/",
  },
  {
    name: "Deeya Jain",
    positions: ["Events Coordinator"],
    linkedin: "https://www.linkedin.com/in/deeya-jain/",
  },
  {
    name: "Srushti Patil",
    positions: ["Events Coordinator"],
    linkedin: "https://www.linkedin.com/in/srushti-patil/",
  },
  {
    name: "Kavin Shah",
    positions: ["Leadership Associate"],
    linkedin: "https://www.linkedin.com/in/kavinshah-student/",
  },
  {
    name: "Brook Chuang",
    positions: ["Expansion Associate"],
    linkedin: "https://www.linkedin.com/in/chuangbrook/",
  },
  {
    name: "Mounica Policharla",
    positions: ["Fundraising Coordinator", "Regional Ambassador"],
    linkedin: "https://www.linkedin.com/in/mounica-policharla-3308ab1ab/",
  },
  {
    name: "Danny Shao",
    positions: ["Regional Ambassador", "Regional Director"],
    linkedin: "https://www.linkedin.com/in/danny-shao-5b84261b1/ ",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1599677464/yei-website/team/danny-shao.jpg",
  },
  {
    name: "Kevin Lin",
    positions: ["Regional Ambassador"],
    linkedin: "https://www.linkedin.com/in/kevin-lin-0274b21a7/",
  },
  {
    name: "Rohan Bajpai",
    positions: ["Regional Ambassador"],
    linkedin: "https://www.linkedin.com/in/rohan-bajpai-460b141ab/",
  },
  {
    name: "Neha Basu",
    positions: ["Regional Ambassador"],
    linkedin: "https://www.linkedin.com/in/nehabasu1/",
  },
  {
    name: "Martina Kurchan",
    positions: ["Regional Ambassador"],
    linkedin: "https://www.linkedin.com/in/martinakurchan/",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1599677464/yei-website/team/martina-kurchan.jpg",
  },
  {
    name: "Faaris Zuberi",
    positions: ["FLIP Curriculum Designer"],
    linkedin: "https://www.linkedin.com/in/faaris-zuberi-4207a91b0/",
  },
  {
    name: "Tarun Srivastava",
    positions: ["FLIP Curriculum Designer"],
    linkedin: "https://www.linkedin.com/in/tarun-srivastava-b9a7aa1a9/",
  },
  {
    name: "Anand Singh",
    positions: ["FLIP Partnership Manager"],
    linkedin: "https://www.linkedin.com/in/anand-singh-321817135/",
  },
  {
    name: "Nevin Thombre",
    positions: ["FLIP Partnership Manager"],
    linkedin: "https://www.linkedin.com/in/nevin-thombre-5154411a9/ ",
  },
  {
    name: "Sacha Toberoff",
    positions: ["FLIP Partnership Manager"],
    linkedin: "https://www.linkedin.com/in/sacha-toberoff-668a911b3/",
  },
];

export default team;
