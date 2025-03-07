import data from './data.js'
export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    let findData = query ? data.filter((item) => item.text.includes(query)) : data
    return new Response(JSON.stringify(findData))
}


export async function POST(req) {
    try {
        const { text } = await req.json();

        if (!text) {
            return new Response(JSON.stringify({ error: "Text is required" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const newComment = {
            id: data.length + 1,
            text: text
        };

        data.push(newComment);

        return new Response(JSON.stringify(newComment), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid JSON data" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
