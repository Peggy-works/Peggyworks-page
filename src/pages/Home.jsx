import { Box, Container, Typography, Button, Card, Divider, Collapse, Avatar, Badge, Stack, Chip } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Navbar from '../components/Navbar.jsx'
import React, { useRef, useState } from 'react'

// Constants
import { socialMedias, aboutMe, jobDescription1, jobDescription2, gridSizes, jobs, contentNav } from '../data/constants.jsx';

// Assets
import profileImage from '../assets/pf_image.png'
import emailIcon from '../assets/email_icon.png'
import githubIcon from '../assets/github_icon.png'
import linkedinIcon from '../assets/linkedin_icon.png'

const Home = () => {
    const currentRef = useRef({})
    const [expandWorkExp, setToggleWorkExp] = useState(false)
    const [expandProjects, setToggleProjects] = useState(false)
    const [expandAboutMe, setToggleAboutMe] = useState(false)
    const icons = [linkedinIcon, githubIcon, emailIcon] 
    
    
    const scrollToSection = (id) => { 
        console.log(`section: ${id}`) 
        currentRef.current[id]?.scrollIntoView({behavior: 'smooth'}) 
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
        >
            {/*<Navbar scrollToSection={scrollToSection} />*/}
            <Grid container> 
                { /* Left column */}
                <Grid container size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 6 }} 
                    sx={{ 
                        pt: {
                            xs: 0,
                            md: 4
                        }
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
                            size={{ xs: 12, lg: 10, xl: 5 }} 
                            sx={{ 
                                px: 2, 
                                pt: 2,
                                width: '100%',
                                height: '100vh',
                                justifySelf: 'flex-end'
                            }}
                        >
                            <Grid 
                                container 
                                size={{ xs: 12 }} 
                                sx={{
                                    height: '100vh'
                                }}
                            >
                                {/* These next 3 containers need to be contained*/}
                                {/* Name/pronouns/image container */}
                                <Grid container 
                                    sx={{ 
                                        justifyContent: {
                                            xs: 'center',
                                            md: 'center',
                                            lg: 'flex-start'
                                        }
                                    }} 
                                    size={{ xs: 12 }}
                                >
                                    <Typography variant='h3' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>
                                        Angel Samora
                                    </Typography>
                                </Grid>
                                <Grid container 
                                    sx={{
                                        justifyContent: {
                                            xs: 'center',
                                            md: 'center',
                                            lg: 'flex-start'
                                        }
                                    }} 
                                    size={{ xs: 12 }}
                                >
                                    <Typography sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', color: '#cfcfcf', pb: 2 }}>
                                        He/Him/They, 23
                                    </Typography>
                                </Grid>
                                <Grid container size={{xs: 12}} 
                                    sx={{ 
                                        pb: 2,
                                        justifyContent: {
                                            xs: 'center',
                                            md: 'center',
                                            lg: 'flex-start'
                                        }
                                    }} 
                                >
                                    <Avatar alt='Angel Samora' src={profileImage} sx={{ width: 200, height: 200}} /> 
                                </Grid>  

                                {/* Table of contents container */}
                                <Grid 
                                    container
                                    sx={{}}
                                >
                                    {contentNav.map((value, index) => (
                                        <Grid container sx={{ alignItems: 'center'}} size={{xs:12}} gap={2}>
                                            <Box 
                                                sx={{
                                                    width: 'fit-content',
                                                    '& .MuiDivider-root': {
                                                        transition: 'width 0.2s ease-in-out'
                                                    },
                                                    '&:hover .MuiDivider-root': { 
                                                        width: '150px',
                                                        bgcolor: '#ffffff85'
                                                    },
                                                    '&:hover .MuiTypography-root': {
                                                        color: '#ffffff85'
                                                    }
                                                }}
                                            >
                                                <Grid container sx={{alignItems: 'center'}} gap={2} size={{xs:12}} onClick={() => scrollToSection(value.name)}>
                                                    <Grid size={{xs: 'auto'}}>
                                                        <Typography variant='h6' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>{'0' + (index + 1)}</Typography>
                                                    </Grid>
                                                    <Grid sx={{fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}} size={{xs: 'auto'}}>
                                                        <Divider sx={{ height: '1.5px', backgroundColor: 'white', width: '103px'}}></Divider>
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
                                <Grid container sx={{ justifyContent: 'flex-start', mt: 1, mb: 2}} size={{xs: 12}} gap={0}>
                                    {socialMedias.map((value, index) => (
                                        <Grid key={index} size={{xs:'auto'}}>
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
                            md: 4,
                            overflowY: {
                                xs: 'auto',
                                sm: 'auto',
                                md: 'auto',
                                lg: 'auto'
                            },
                            "&::-webkit-scrollbar": { 
                                display: "none" 
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
                    >
                        {/* About me Section */}
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
                        > 
                            <Grid container gap={2} size={{ xs: 7, lg: gridSizes.workExp }} 
                                sx={{ 
                                    p: 2, 
                                    justifyContent: {
                                        xs: 'center',
                                        sm: 'flex-start'
                                    }
                                }}
                                ref={(el) => (currentRef.current['about'] = el)}
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
                                ref={(el) => (currentRef.current['experience'] = el)}
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
                                    { /* Job Description #1 */}
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
                                            <Typography variant='' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontWeight: 'bold'}}>asdf</Typography>
                                            <Grid size={{xs:12}}>
                                                <Typography variant='' fontSize={13} sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>asdf</Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography fontSize={13} component='li' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>Led development of custom Moodle LMS plugins powered by LLMs for dynamic course and content generation.</Typography>
                                            </Grid> 
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box> 
    )
}

export default Home