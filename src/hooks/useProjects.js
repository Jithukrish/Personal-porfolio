import { useEffect, useState } from 'react'
import { getProjects } from '../services/projectService'

export function useProjects() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading')
  useEffect(() => {
    let cancelled = false
    getProjects()
      .then((p) => !cancelled && (setProjects(p), setStatus('ready')))
      .catch(() => !cancelled && setStatus('error'))
    return () => { cancelled = true }
  }, [])
  return { projects, status }
}
