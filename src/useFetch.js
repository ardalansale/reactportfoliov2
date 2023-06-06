import {useState, useEffect} from 'react';

 const useFetch = (url) => {

    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(null);
    const[error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal:abortCont.signal})
            .then(res =>{
                console.log ('****** This is the response', res.status)

                if(!res.ok){
                    throw Error ('An Error Has Occurred because res is not ok')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted');

                }else{
                    setIsPending(false);
                    setError(err.message)

                    console.log(err.message)
                }
            })
        }, 1000)
    },[url]);
    return {data, isPending, error}



 }
export default useFetch;