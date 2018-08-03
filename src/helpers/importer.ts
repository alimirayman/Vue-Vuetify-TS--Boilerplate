// function to import pages
const loadPage = (fileName: string = '') => () =>
  import(`@/views/${fileName}.vue`)

// function to import layouts
const loadLayout = (fileName: string = '') => () =>
  import(`@/layouts/${fileName}.vue`)

// function to import components
export const loadComponent = (fileName: string = '') => () =>
  import(`@/components/${fileName}.vue`)

// function to create Route
export const createRoute = (dir: string = '') => (
  path: string = '',
  fileName: string = '',
  children: any[] = []
) => {
  const name = dir
    ? `${dir}.${fileName.replace('/', '.')}`
    : fileName.toLowerCase().replace('/', '.')
  const component = dir ? loadPage(`${dir}/${fileName}`) : loadPage(fileName)

  return children.length
    ? {
        path,
        component,
        children
      }
    : {
        path,
        name,
        component
      }
}

// function to create Layout
export const createLayout = (dir = '') => (
  path: string = '',
  fileName: string = '',
  children: any[] = []
) => {
  const component = dir
    ? loadLayout(`${dir}/${fileName}`)
    : loadLayout(fileName)

  return {
    path,
    component,
    children
  }
}
