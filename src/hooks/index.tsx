import {JOBS_API} from '@src/constants';
import {Job, JobsRes} from '@src/types';
import axios from 'axios';
import {useEffect, useState} from 'react';

export function useJobs(query?: string) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await axios.get<JobsRes>(
          query ? `${JOBS_API}&what=${query}` : JOBS_API,
        );

        setJobs(response.data.results);
      } catch (error) {
        console.log(error);
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);

  return {jobs, error, loading};
}
