import Sidebar_item from "./Sidebar-item";
import React,{useState,useEffect} from 'react';
import { Posts } from "../data/posts";
import Mainsection_item from "./Mainsection_item";


export const Main_section = () => {
    const posts = Posts.filter(x => x.category == "machine_learning")
    return( 
        <div className="Main-section">
            {posts.map((post)=>{
                return (
                <><Mainsection_item {...post}/>
                </>
            );})}
            
        </div>
    );
};

export default Main_section