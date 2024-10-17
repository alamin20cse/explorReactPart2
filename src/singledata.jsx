export default function SingleData({single})
{
   
    console.log(single);
    const {name,id}=single;

    return (<div className="add">

<h2>Name:{name} </h2>
<h3>Id :{id} </h3>
    </div> )

}

