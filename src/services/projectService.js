import { projects } from '../data/projects'

/**
 * Data access for projects. Today it returns local config data.
 * To load from ERPNext later, fetch `${baseUrl}/api/resource/Portfolio Project`
 * here and map the fields to the shape in data/projects.js — components don't change.
 */
export async function getProjects() {
  return projects
}
