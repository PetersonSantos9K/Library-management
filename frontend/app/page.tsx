
export default async function Home() {


  const res = await fetch("http://localhost:8080/autores");
  const resp = await res.json();


  const arrayAutores = resp.data;
  
  console.log(arrayAutores[5])
    
  const arrNames = [];
  
  for(let i=0; i<arrayAutores.length; i++){
    arrNames.push(arrayAutores[i].nome);
  }
  console.log(arrNames)
  return 
}
