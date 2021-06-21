import { useState, useEffect } from 'react';

const useApi = () => {
    const [data, setData] = useState({ hits: [] });
    const [url, setUrl] = useState(
        '/api/words',
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
        const result = await fetch(url);

        setData(result.data);
        } catch (error) {
        setIsError(true);
        }

        setIsLoading(false);
    };

    fetchData();
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];}

    export default useApi;