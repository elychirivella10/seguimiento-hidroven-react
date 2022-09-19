const select = [
    {
        reportar:[
            {
                name:'M3 Producidos',
                id:'metros_cubicos',
                type:'number'
            }
        ]
    },
    {
        anexar:[
            {
                name:'nombre',
                type:'text'
            },
            {
                name:'operatividad',
                type:'check'
            },
            {
                name:'lps',
                type:'number'
            },
            {
                name:'id_estado',
                type:'number'
            },
            {
                name:'id_municipio',
                type:'number'
            },
            {
                name:'id_parroquia',
                type:'number'
            },
            {
                name:'sector',
                type:'text'
            }
        ],
        reportar:[
            {
                name:'Lps',
                id:'lps',
                type:'number'
            },
            {
                name:'Pozo',
                id:'id_pozo',
                type:'select'
            }
        ]
    },
    {
        reportar:[
            {
                name:'Aduccion',
                id:'nombre_aduccion',
                type:'text'
            },
            {
                name:'Estado',
                id:'id_estado',
                type:'select'
            }
        ]
    }
    
]

export const registerSelect =(id)=>{
    
    if (!isNaN(id)) {
        id= parseInt(id)
        switch (id) {
            case 0:
                return select[0]
                break;
            case 1:
                return select[1]
                break;
            case 2:
                return select[2]
                break;
        
            default:
                return null
                break;
        }
    } else{
        return null
    }
    

}

export default select