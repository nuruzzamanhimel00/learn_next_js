export default function Docs({params}){
    if(params.slug?.length === 2){
        return (
            <> 
                <h1>Docs</h1>
                <p>Docs Details features: {params.slug[0]} and concept: {params.slug[1]}</p>
            </>
        );
    }
    else if(params.slug?.length === 1){
        return (
            <> 
                <h1>Docs</h1>
                <p>Docs Details features: {params.slug[0]} </p>
            </>
        );
    }
    

}