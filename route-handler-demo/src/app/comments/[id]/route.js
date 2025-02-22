import { redirect } from 'next/navigation'
import data from "../data.js"

export async function GET(request, { params }) {
    let id = (await params).id
    if(id > 4){
        redirect('/comments')
    }
    let findData = data.find((item) => item.id == id)
    // return request;
    return new Response(JSON.stringify(findData))
}

export async function PATCH(request, { params }) {
    let id = (await params).id
    let findData = data.find((item) => item.id == id)
    let { text } = await request.json()
    findData.text = text
    return new Response(JSON.stringify(findData))
}

export async function DELETE(request, { params }) {
    // Extract the id from params
    const id  = (await params).id;

    // Filter out the item with the matching id
    const findIndex = data.findIndex((item) => item.id == parseInt(id));

    let deletedComment = data[findIndex]
    data.splice(findIndex, 1);

    // // Update the original dataset (if needed)
    // data = updatedData;

    return new Response(JSON.stringify(deletedComment))
}