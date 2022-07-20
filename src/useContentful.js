import { createClient} from "contentful"
const useContentful = () =>{

 const client = createClient({
    space:"lbq6f50gjab5",
    accessToken:"6Ainag-s8ApdsuHrwNbplLTTFwh94CQRlPSIy8Aw_64",
    host:"cdn.contentful.com",
  });

  const getAuthors = async ()=>{
    try{
const entries = await client.getEntries({
  content_type:"customer",
  select:"fields"
});

const sanitizedEntries = entries.items.map((item)=>{
  const name = item.fields.name;
  return{
    ...item.fields
  }
}


)

return sanitizedEntries
    } catch(error){
console.log(error)
    }
  }
return{getAuthors}
}
export default useContentful