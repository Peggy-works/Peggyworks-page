import { Box, Container, Typography, Button, Card, Divider, Collapse, Avatar, Badge, Stack, Chip } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Navbar from '../components/Navbar.jsx'
import React, { useRef, useState } from 'react'

// Constants
import { socialMedias, aboutMe, aboutMeParts, jobDescription1, jobDescription2, gridSizes, jobs, contentNav, projects } from '../data/constants.jsx';

// Assets
import profileImage from '../assets/pf_image.png'
import emailIcon from '../assets/email_icon.png'
import githubIcon from '../assets/github_icon.png'
import linkedinIcon from '../assets/linkedin_icon.png'

const Home = () => {
    const sectionRef = useRef({})
    const containerRef = useRef(null)
    const parentContainerRef = useRef(null)

    const [expandWorkExp, setToggleWorkExp] = useState(false)
    const [expandProjects, setToggleProjects] = useState(false)
    const [expandAboutMe, setToggleAboutMe] = useState(false)
    const icons = [linkedinIcon, githubIcon, emailIcon] 
    const parts = aboutMeParts(profileImage)
    
    
    const scrollToSection = (id) => { 
        const section = sectionRef.current[id]
        const container = containerRef.current 
        console.log(`section: ${id}`)  
        if(section && container){ 
            container.scrollTo({
                top: section.offsetTop - 32,
                behavior: 'smooth',
                
            })
        }
    }

    const handleExpand = (e) => {
        expandAboutMe ? setToggleAboutMe(false) : setToggleAboutMe(true)
    }

    return (
        <Box
            sx={{ 
                backgroundColor: '#2F3439',
                height: '100vh', 
                width: '100%',
                overflowY: {
                    xs: 'auto',
                    sm: 'auto',
                    md: 'auto',
                    lg: 'hidden'
                },
                "&::-webkit-scrollbar": { 
                    display: "none" 
                }, 
                msOverflowStyle: "none", 
                scrollbarWidth: "none" ,
                boxSizing: 'border-box'
            }}
            ref={parentContainerRef}
        >
            {/*<Navbar scrollToSection={scrollToSection} />*/}
            <Grid container> 
                { /* Left column */}
                <Grid container size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 6 }} 
                    sx={{ 
                        pt: {
                            xs: 0,
                            md: 0
                        },
                        overflowY: 'hidden'
                    }} 
                    position='sticky'
                >
                    <Box 
                        sx={{ 
                            height: {
                                xs: 'auto',
                                md: 'auto'
                            },  
                            width: '100%'
                        }}
                    > 
                        {/* This is the left column of this two column design */}
                        <Grid 
                            container 
                            size={{ xs: 12, lg: 10, xl: 6 }} 
                            sx={{ 
                                px: 1, 
                                pt: 2,
                                mt: {
                                    xs: 4
                                },
                                pb: {
                                    xs: 6
                                },
                                width: '100%',
                                height: '100vh',
                                justifySelf: 'flex-end'
                            }}
                        >
                            <Grid 
                                container 
                                size={{ xs: 12 }} 
                                sx={{
                                    height: '100vh',
                                }}
                            > 
                                {/* Name/pronouns/image container */}
                                <Grid 
                                    container
                                    size={{xs:12}}
                                    sx={{
                                        alignContent: 'flex-start',
                                        p: 1 // Apply this to all other containers
                                    }}
                                >
                                    {parts.map((value, index) => (
                                        <Grid container 
                                            sx={{ 
                                                justifyContent: {
                                                    xs: 'center',
                                                    md: 'center',
                                                    lg: 'flex-start'
                                                },
                                                height: 'fit-content'
                                            }} 
                                            size={{ xs: 12 }}
                                        >
                                            {value.snippet}
                                        </Grid>
                                    ))}
                                </Grid> 

                                {/* Table of contents container */}
                                <Grid 
                                    container
                                    sx={{
                                        alignContent: 'flex-start',
                                        p: 1
                                    }}
                                >
                                    {contentNav.map((value, index) => (
                                        <Grid 
                                            container 
                                            sx={{ 
                                                alignItems: 'center', 
                                                height: 'fit-content', 
                                                py: '6px',
                                                '& .MuiDivider-root': {
                                                    transition: 'width 0.13s ease-in-out'
                                                },
                                                '&:hover .MuiDivider-root': { 
                                                    width: '90px',
                                                    bgcolor: '#ffffff85'
                                                },
                                                '&:hover .MuiTypography-root': {
                                                    color: '#ffffff85'
                                                }
                                            }} 
                                            size={{xs:12}} 
                                            gap={2}
                                            onClick={() => scrollToSection(value.name)}
                                        >
                                            <Box 
                                                sx={{ 
                                                    width: 'fit-content'
                                                }} 
                                            >
                                                <Grid container sx={{alignItems: 'center'}} gap={2} size={{xs:12}} >
                                                    <Grid size={{xs: 'auto'}}>
                                                        <Typography variant='h6' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>{'0' + (index + 1)}</Typography>
                                                    </Grid>
                                                    <Grid sx={{fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}} size={{xs: 'auto'}}>
                                                        <Divider sx={{ height: '1.5px', backgroundColor: 'white', width: '45px'}}></Divider>
                                                    </Grid>
                                                    <Grid size={{xs: 'auto'}} >
                                                        <Typography variant='h6' sx={{fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>{value.sectionName}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>

                                {/* Social Media links container */}
                                <Grid container sx={{ justifyContent: 'flex-start', mt: 1, mb: 2, alignContent: 'flex-start', p: 1}} size={{xs: 12}} gap={2}>
                                    {socialMedias.map((value, index) => (
                                        <Grid key={index} size={{xs:'auto'}} sx={{height: 'fit-content'}}>
                                            <Box>
                                                <Grid container spacing={2} sx={{ alignItems: 'center'}}>
                                                    <img
                                                        src={icons[index]}
                                                        style={{}}
                                                    /> 
                                                    <Typography variant='h6' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>{value.name}</Typography>
                                                </Grid>
                                            </Box> 
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid> 
                
                { /* Right column */}
                <Grid container size={{xs: 12, sm: 12, md: 12, lg: 8, xl: 6 }}  
                    sx={{ 
                        pt: {
                            xs: 0,
                            md: 0,
                            overflowY: {
                                xs: 'auto',
                                sm: 'auto',
                                md: 'auto',
                                lg: 'auto'
                            },
                            "&::-webkit-scrollbar": { 
                                display: "none" 
                            }, 
                            mt: {
                                xs: 4
                            },
                            msOverflowStyle: "none", 
                            scrollbarWidth: "none" 
                        }
                    }}
                >
                    <Box 
                        sx={{ 
                            height: 'calc(100vh - 32px)', 
                            width: '100%', 
                            pt: {
                                xs: 4
                            },
                            overflowY: {
                                xs: 'visible',
                                sm: 'visible',
                                md: 'visible',
                                lg: 'auto'
                            },
                            "&::-webkit-scrollbar": { 
                                display: "none" 
                            }, 
                            msOverflowStyle: "none", 
                            scrollbarWidth: "none" 
                            
                        }}
                        ref={containerRef}
                    >
                        
                        <Grid container size={{ xs: 12 }} 
                            sx={{ 
                                justifyContent: {
                                    xs: 'center',
                                    sm: 'center',
                                    md: 'center',
                                    lg: 'flex-start'
                                }
                            }}
                            gap={3}
                            ref={(el) => (sectionRef.current['about'] = el)}
                        >
                            {/* About me Section */} 
                            <Grid container gap={2} size={{ xs: 7, lg: gridSizes.workExp }} 
                                sx={{ 
                                    p: 2, 
                                    justifyContent: {
                                        xs: 'center',
                                        sm: 'flex-start'
                                    }
                                }}
                                // ref={(el) => (sectionRef.current['about'] = el)}
                            >  
                                <Grid size={{xs: 12, sm: 12, md: 12, lg: 12}} sx={{ textAlign: 'left' }}> 
                                    {aboutMe.description.map((val, index) => (
                                        <Typography
                                            key={index}
                                            sx={{fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}
                                            {...(index === 0 ? {variant: 'h3', pb: 1} : {fontSize: '0.875rem', pb: index === aboutMe.description.length - 1 ? 0 : 2})}
                                        >
                                            {val}
                                        </Typography>
                                    ))}
                                </Grid> 
                            </Grid>  
                            
                            {/* Work experience section */}
                            <Grid container 
                                gap={2} 
                                size={{xs: 7, lg: gridSizes.workExp}}
                                sx={{ 
                                    p: 2, 
                                    justifyContent: 'center' 
                                }}
                                ref={(el) => (sectionRef.current['experience'] = el)}
                            > 
                                {jobs.map((value, index) => (
                                    <Box 
                                        sx={{
                                            '&:hover': {
                                                bgcolor: '#3e4247' 
                                            },
                                            p: 1,
                                            border: '2px solid #2F3439',
                                            borderRadius: 2,
                                            transition: 'background-color 0.05s ease 0.05s'
                                        }}
                                    >
                                        
                                        <Grid container size={{xs: 12, sm: 12, md: 12, lg: 12}} sx={{ textAlign: 'left' }}> 
                                            <Grid container spacing={1} size={{xs:4, md: 3}} sx={{ alignItems: 'flex-start' }}>
                                                <img src={githubIcon} alt='Github Link' /> 
                                                <Typography variant='h6' 
                                                    sx={{ 
                                                        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                                                        fontSize: {
                                                            xs: 16,
                                                            sm: 16
                                                        }
                                                    }}
                                                >
                                                    Placeholder
                                                </Typography>
                                            </Grid>
                                            <Grid container size={{xs:8, md: 9}} spacing={0} sx={{ alignItems: 'center' }}> 
                                                <Typography variant='' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontWeight: 'bold'}}>{value.name}</Typography>
                                                <Grid size={{xs:12}}>
                                                    <Typography variant='' fontSize={13} sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>{value.date}</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Box component='ul' sx={{ pl: 3, mt: 1}}>
                                                        {value.description.map((value, index) => (
                                                            <Typography key={index} fontSize={13} component='li' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>{value}</Typography>
                                                        ))} 
                                                    </Box>
                                                </Grid>
                                                <Grid size={{xs: 12}}>
                                                    <Grid size={{xs:12}}>
                                                        <Stack direction='row' spacing={0} gap={1} flexWrap='wrap'> 
                                                            {value.skills.map((val, index) => (
                                                                <Chip
                                                                    key={index}
                                                                    label={val}
                                                                    color='primary'
                                                                ></Chip>
                                                            ))}
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                ))}
                            </Grid>

                            

                            {/* Education section */}
                            <Grid container 
                                gap={2} 
                                size={{xs: 7, lg: gridSizes.workExp}}
                                sx={{ 
                                    p: 2, 
                                    justifyContent: 'center' 
                                }} 
                                ref={(el) => (sectionRef.current['education'] = el)}
                            > 
                                <Box 
                                    sx={{
                                        '&:hover': {
                                            bgcolor: '#3e4247' 
                                        },
                                        p: 1,
                                        border: '2px solid #2F3439',
                                        borderRadius: 2,
                                        transition: 'background-color 0.05s ease 0.05s'
                                    }}
                                > 
                                    <Grid container size={{xs: 12, sm: 12, md: 12, lg: 12}} sx={{ textAlign: 'left' }}> 
                                        <Grid container spacing={1} size={{xs:4, md: 3}} sx={{ alignItems: 'flex-start' }}> 
                                            <Typography variant='h6' 
                                                sx={{ 
                                                    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                                                    fontSize: {
                                                        xs: 16,
                                                        sm: 16
                                                    }
                                                }}
                                            >
                                                2022 - 2024
                                            </Typography>
                                        </Grid>
                                        <Grid container size={{xs:8, md: 9}} spacing={0} sx={{ alignItems: 'center' }}> 
                                            <Typography variant='' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontWeight: 'bold'}}>Computer Science</Typography>
                                            <Grid size={{xs:12}}>
                                                <Typography variant='' fontSize={13} sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>California State University</Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography fontSize={13} sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>Studied Computer Science with a focus on building software, exploring AI, and working with systems like cloud computing and mobile apps. Completed a capstone project that involved designing and developing a full-stack application, integrating concepts from software engineering and system design.</Typography>
                                            </Grid> 
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Projects section */}
                            <Grid container 
                                gap={2} 
                                size={{xs: 7, lg: gridSizes.workExp}}
                                sx={{ 
                                    p: 2, 
                                    justifyContent: 'center' 
                                }} 
                                ref={(el) => (sectionRef.current['education'] = el)}
                            > 
                                <Box 
                                    sx={{
                                        '&:hover': {
                                            bgcolor: '#3e4247' 
                                        },
                                        p: 1,
                                        border: '2px solid #2F3439',
                                        borderRadius: 2,
                                        transition: 'background-color 0.05s ease 0.05s'
                                    }}
                                > 
                                    <Grid container size={{xs: 12, sm: 12, md: 12, lg: 12}} sx={{ textAlign: 'left' }} spacing={1}> 
                                        {
                                            projects.map((value, index) => (
                                                <Grid container size={{xs:12, md: 12}} sx={{alignItems: 'flex-start'}}> 
                                                    <Grid size={{xs:6}}>
                                                        <Typography>
                                                            Stars: {value.stars}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid size={{xs: 6}}>
                                                        <Typography>
                                                            {value.primaryLanguage}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid size={{xs:12}}>
                                                        {value.desc}
                                                    </Grid>
                                                    {/* {Object.entries(value).map(([key, value]) => {
                                                        return (
                                                            <Grid container size={{xs: 12}} sx={{}} >
                                                                <Grid size={{xs: 6}}>
                                                                    <Typography>
                                                                        {key} {value}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid size={{xs:6}}>
                                                                    <Typography>
                                                                        {key}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        )
                                                    })}  */}
                                                    {/* {Object.entries(value).map(([key, value]) => {
                                                        return (
                                                            <Grid container size={{xs: 12}} sx={{}} >
                                                                <Grid size={{xs: 6}}>
                                                                    <Typography>
                                                                        {key} {value}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid size={{xs:6}}>
                                                                    <Typography>
                                                                        {}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        )
                                                    })} */}
                                                    {/* <Typography 
                                                        variant='h6'
                                                        sx={{ 
                                                            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                                                            fontSize: {
                                                                xs: 16,
                                                                sm: 16
                                                            }
                                                        }}
                                                    >
                                                        {value.desc} 
                                                    </Typography>
                                                    <Typography 
                                                        variant='h6'
                                                        sx={{ 
                                                            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                                                            fontSize: {
                                                                xs: 16,
                                                                sm: 16
                                                            }
                                                        }}
                                                    >
                                                        {value.primaryLanguage} 
                                                    </Typography> */}
                                                </Grid>
                                            ))
                                        } 
                                        {/* <Grid container spacing={1} size={{xs:6, md: 6}} sx={{ alignItems: 'flex-start' }}> 
                                            <Typography variant='h6' 
                                                sx={{ 
                                                    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                                                    fontSize: {
                                                        xs: 16,
                                                        sm: 16
                                                    }
                                                }}
                                            >
                                                2022 - 2024
                                            </Typography>
                                        </Grid> */}
                                        {/* <Grid container size={{xs:8, md: 9}} spacing={0} sx={{ alignItems: 'center' }}> 
                                            <Typography variant='' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontWeight: 'bold'}}>Computer Science</Typography>
                                            <Grid size={{xs:12}}>
                                                <Typography variant='' fontSize={13} sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>California State University</Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography fontSize={13} sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>Studied Computer Science with a focus on building software, exploring AI, and working with systems like cloud computing and mobile apps. Completed a capstone project that involved designing and developing a full-stack application, integrating concepts from software engineering and system design.</Typography>
                                            </Grid> 
                                        </Grid> */}
                                    </Grid>
                                </Box>
                            </Grid>

                            {/*Footer section*/}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box> 
    )
}

export default Home