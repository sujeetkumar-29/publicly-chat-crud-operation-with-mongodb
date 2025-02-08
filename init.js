const mongoose=require("mongoose");

const Chat=require("./models/chat.js");

main()
.then((res)=>{
    console.log("Connection successful");
})
.catch((err)=>{console.log(err)});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

let allChats= [
    {
        from:"Alice",
        to:"Bob",
        msg:"Hey Bob, how are you doing today?",
        created_at:new Date(),
    },
    {
        from:"Bob",
        to:"Alice",
        msg:"Hi Alice, I'm good! How about you?",
        created_at:new Date(),
    },
    {
        from:"Charlie",
        to:"Dave",
        msg:"Are we still on for the meeting at 3 PM?",
        created_at:new Date(),
    },
    {
        from:"Dave",
        to:"Charlie",
        msg:"Yes, see you then!",
        created_at:new Date(),
    },
    {
        from:"Eve",
        to:"Frank",
        msg:"Can you send me the report by tonight?",
        created_at:new Date(),
    },
    {
        from:"Frank",
        to:"Eve",
        msg:"Sure, I'll have it ready by 8 PM.",
        created_at:new Date(),
    },
    {
        from:"Grace",
        to:"Heidi",
        msg:"Do you want to grab lunch together?",
        created_at:new Date(),
    },
    {
        from:"Heidi",
        to:"Grace",
        msg:"hat sounds great! Where should we go?",
        created_at:new Date(),
    },
    {
        from:"Ivan",
        to:"Judy",
        msg:"Happy birthday, Judy! Hope you have a great day!",
        created_at:new Date(),
    },
    {
        from:"Judy",
        to:"Ivan",
        msg:"Thanks, Ivan! I appreciate it.",
        created_at:new Date(),
    },
    {
        from:"Alice",
        to:"Charlie",
        msg:"Did you finish the project?",
        created_at:new Date(),
    },
    {
        from:"Charlie",
        to:"Alice",
        msg:"Almost done, just a few more tweaks.",
        created_at:new Date(),
    },
    {
        from:"Bob",
        to:"Dave",
        msg:"Can we reschedule our call to tomorrow?",
        created_at:new Date(),
    },
    {
        from:"Dave",
        to:"Bob",
        msg:"Sure, what time works for you?",
        created_at:new Date(),
    },
    {
        from:"Eve",
        to:"Grace",
        msg:"Are you coming to the party this weekend?",
        created_at:new Date(),
    },
    {
        from:"Grace",
        to:"Eve",
        msg:"Yes, looking forward to it!",
        created_at:new Date(),
    },
    {
        from:"Frank",
        to:"Heidi",
        msg:"Have you seen the latest movie?",
        created_at:new Date(),
    },
    {
        from:"Heidi",
        to:"Frank",
        msg:"Not yet, but I plan to watch it soon.",
        created_at:new Date(),
    },
    {
        from:"Ivan",
        to:"Alice",
        msg:"Do you need any help with your homework?",
        created_at:new Date(),
    },
    {
        from:"Alice",
        to:"Ivan",
        msg:"Yes, that would be great, thank you!",
        created_at:new Date(),
    },
];

Chat.insertMany(allChats);