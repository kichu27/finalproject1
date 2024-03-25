import { NextResponse } from "next/server";
import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import getdatafromtoken from "@/app/helpers/getdatafromtoken";
import { Course } from "@/models/CourseModel";

export async function GET(request) {
    try {
        await Connect();

        const id = await getdatafromtoken(request);
        const user = await User.findOne({ _id: id });

        if (user) {
    
            let bc = user.Boughtcourses  
            const boughtcourses = await Course.find({ _id: { $in: bc } });

        return NextResponse.json({dota:boughtcourses})
        } else {
            console.log("User not found");
        }

    } catch (error) {
        return NextResponse.json({error:error})
    }


}
