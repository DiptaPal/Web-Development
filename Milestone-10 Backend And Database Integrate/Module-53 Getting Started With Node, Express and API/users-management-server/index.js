const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("User Server is available");
});

const users = [
  {
    id: 01,
    name: "Alex Rivera",
    email: "alex.rivera@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    id: 02,
    name: "Jordan Chen",
    email: "jordan.chen@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan"
  },
  {
    id: 03,
    name: "Sophia Patel",
    email: "sophia.patel@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia"
  },
  {
    id: 04,
    name: "Marcus Vance",
    email: "marcus.vance@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    id: 05,
    name: "Elena Rostova",
    email: "elena.rostova@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    id: 06,
    name: "Liam O'Connor",
    email: "liam.oconnor@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam"
  },
  {
    id: 07,
    name: "Aisha Tanaka",
    email: "aisha.tanaka@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha"
  },
  {
    id: 08,
    name: "David Kim",
    email: "david.kim@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    id: 09,
    name: "Maya Brooks",
    email: "maya.brooks@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya"
  },
  {
    id: 10,
    name: "Lucas Thorne",
    email: "lucas.thorne@example.com",
    profilePictureUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas"
  }
];


app.get("/users", (req, res) => {
    res.send(users)
})

app.post("/users", (req, res) => {
    const newUser = req.body;

    newUser.id = users.length + 1;

    users.push(newUser);

    res.send({
        message: "User Created",
        newUser: newUser
    })
})

app.listen(port, () => {
    console.log(`User Server started on Port: ${port}`);
});