import React from 'react'

const Pagination = ({pagina, paginas, guardarPagina}) =>{
    return(
        <nav class="pagination is-small is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous has-background-white" onClick={pagina>1?()=>guardarPagina(pagina-1):null}>Previous</a>
            <a class="pagination-next has-background-white" onClick={pagina<paginas?()=>guardarPagina(pagina+1):null}>Next page</a>
            <ul class="pagination-list">
                <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">{pagina}</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><a class="pagination-link" aria-label="Goto page 86">{paginas}</a></li>
            </ul>
        </nav>
    )
} 
export default Pagination