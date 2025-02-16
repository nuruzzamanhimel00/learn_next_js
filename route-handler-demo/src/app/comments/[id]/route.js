import data from "../data.js"

export async function GET(request, { params }) {
    let id = (await params).id
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

