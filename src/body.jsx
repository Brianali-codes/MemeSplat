import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

export default function Body() {
    const [meme, setMeme] = useState(null);
    const [templates, setTemplates] = useState([]);

    const generateMeme = async () => {
        const url = 'https://meme-api.com/gimme';
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch meme');
            const data = await response.json(); // Correctly await the JSON parsing
            setMeme(data); // Save the fetched meme data
            console.log(data);
        } catch (error) {
            console.error('Error fetching meme:', error);
        }
    };

    const generateTemplate = async () => {
        const url2 = 'https://api.memegen.link/templates';
        try {
            const response2 = await fetch(url2);
            if (!response2.ok) throw new Error('Failed to fetch templates');
            const data2 = await response2.json(); // Correctly await the JSON parsing
            setTemplates(data2); // Save the fetched templates data
            console.log(data2);
        } catch (error) {
            console.error('Error fetching templates:', error);
        }
    };

    useEffect(() => {
        generateMeme();
        generateTemplate();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        
                <div className="bg-white dark:bg-black h-fit flex flex-col justify-center items-center gap-5">

                    <p className="DescM text-2xl p-5 text-black dark:text-white ">Generate Random Memes.</p>
                    <hr />
                    {meme && (
                        <div className='text-center flex flex-col justify-center items-center '>
                            <h2 className='Desc text-black dark:text-white'>{meme.title}</h2>
                            <br />
                            <img src={meme.url} alt={meme.title} className='HeroImg'/>
                            <br />
                            <a href={meme.url} download><Button outline gradientDuoTone="purpleToPink">
                                    Generate Random Meme.
                                </Button>
                            </a>
                            
                        </div>
                    )}
                    <br /><br />
                    <hr />
                    <br /><br />
                    <p className='text-center DescM text-black dark:text-white'>Meme Templates.</p>
                    <div className="TempContainer">
                        
                        {templates.map((template) => (
                            
                            <div key={template.id} className='flex flex-col justify-center items-center'> {/* Ensure to use a unique key for each item */}
                                <p className='Desc text-black dark:text-white'>{template.name}</p>
                                <br />
                                <img src={template.blank} alt="" className='IMG2' />
                                <br />
                                <a href={template.blank} download><Button outline gradientDuoTone="purpleToPink">
                                    Get This Template.
                                </Button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
        
           
    );
}
