import { NextResponse } from "next/server";
import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import getdatafromtoken from "@/app/helpers/getdatafromtoken";

export async function GET(request) {
    try {
        await Connect();

        const id = await getdatafromtoken(request);
        const user = await User.findOne({ _id: id });

        if (user) {
    
            user.Boughtcourses = user.Boughtcourses.concat(user.clickedcarts);
            user.clickedcarts = [];

            // Save the updated user
            await user.save();
            
        } else {
            console.log("User not found");
        }

        return NextResponse.json({status:200})
    } catch (error) {
        return NextResponse.json({status:500})
    }


}
