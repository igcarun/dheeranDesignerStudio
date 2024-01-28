import { createContext } from "react";
import flower from '../images/flower_zardosi.jpeg';
import design_with_aari from '../images/peacock_with_design.jpeg';
import design_outline from '../images/peacock_without_aari.jpeg';
import ribbon from '../images/ribbon_flower.jpeg';
import patch_work from '../images/patch_work.jpeg';
import silk_thread_tassels from '../images/silk_thread_tassels.jpeg';
import beads_tassels from '../images/beads_tassels.jpeg';

const DataContext = createContext(null);

export const DataProvider = ({children}) => {

    const title = 'Dheeran Studio';
    const items = [
        {
            id: 1,
            name: 'Design Outline',
            url: design_outline,
            desc: 'Bead work',
        },
        {
            id: 2,
            name: 'Design With Aari',
            url: design_with_aari,
            desc: 'Zardosi and Bead Work'
        },
        {
            id: 3,
            name: 'Ribbon Design',
            url: ribbon,
            desc: 'Made Flower with Ribbon'
        },
        {
            id: 4,
            name: 'Patch Work',
            url: patch_work,
            desc: 'Patch Work'
        },
        {
            id: 5,
            name: 'Silk Thread Tassels',
            url: silk_thread_tassels,
            desc: 'Using the Silk Thread made the tassels'
        },
        {
            id: 6,
            name: 'Beads Tassels',
            url: beads_tassels,
            desc: 'Using the Beads made the tassels'
        },
        {
            id: 7,
            name: 'Flower Design',
            url: flower,
            desc: 'Made the zardosi flower'
        },
    ];

    return (<DataContext.Provider value={{title, items}}>
        {children}
    </DataContext.Provider>
    )
}

export default DataContext;