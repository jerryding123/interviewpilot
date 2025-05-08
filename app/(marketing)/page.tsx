'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiMic,
  FiBriefcase,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiZap,
  FiGlobe,
  FiShield,
  FiHeadphones,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
// Removed logo components import as we'll use Image directly
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

// export const metadata: Metadata = {
//  title: 'Saas UI Landingspage',
//  description: 'Free SaaS landingspage starter kit',
// }

const SystemStatus = () => (
  <Box 
    position="fixed"
    top="80px"
    left="50%"
    transform="translateX(-50%)"
    zIndex="1000"
    px="3"
    py="2"
    borderRadius="full"
    bg="rgba(255, 255, 255, 0.15)"
    backdropFilter="blur(10px)"
    border="1px solid rgba(255, 255, 255, 0.2)"
    boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap="2"
  >
    <Box
      w="8px"
      h="8px"
      borderRadius="full"
      bg="green.400"
      animation="statusPulse 2s infinite" // Changed animation name to "statusPulse"
      alignSelf="center"
      sx={{
        '@keyframes statusPulse': { // Changed keyframes name to "statusPulse"
          '0%': {
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 0 rgba(72, 187, 120, 0.7)',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 10px rgba(72, 187, 120, 0)',
          },
          '100%': {
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 0 rgba(72, 187, 120, 0)',
          },
        },
      }}
    />
    <Text 
      fontWeight="medium" 
      color="white" 
      fontSize="sm"
      lineHeight="1"
      alignSelf="center"
    >
      All Systems Online
    </Text>
  </Box>
);

const Home: NextPage = () => {
  return (
    <Box>
      <SystemStatus />
      
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="0">
        <Stack 
          direction={{ base: 'column', lg: 'row' }} 
          alignItems="center"
          spacing={{ base: 24, sm: 20, md: 16, lg: 0 }}  // Significantly increased spacing for smallest screens
        >
          {/* Text content - below video for mobile, left for desktop */}
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            order={{ base: 2, lg: 1 }}  // Second on mobile, first on desktop
            mt={{ base: 12, sm: 10, md: 8, lg: 0 }}  // Increased top margin for smaller screens
            width={{ base: "100%", lg: "50%" }}
            title={
              <FallInPlace>
                <Box as="span" position="relative" display="inline">
                  <Box
                    position="absolute"
                    display="inline-block"
                    right="-40px"
                    top="50%"
                    transform="translateY(-50%)"
                    w={5}
                    h={5}
                    borderRadius="full"
                    bg="green.400"
                    animation="pulse 2s infinite"
                    sx={{
                      '@keyframes pulse': {
                        '0%': {
                          transform: 'translateY(-50%) scale(0.95)',
                          boxShadow: '0 0 0 0 rgba(72, 187, 120, 0.7)',
                        },
                        '70%': {
                          transform: 'translateY(-50%) scale(1.2)',
                          boxShadow: '0 0 0 30px rgba(72, 187, 120, 0)',
                        },
                        '100%': {
                          transform: 'translateY(-50%) scale(0.95)',
                          boxShadow: '0 0 0 0 rgba(72, 187, 120, 0)',
                        },
                      },
                    }}
                  />
                  Live AI
                </Box>
                <Br /> Interview Copilot
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Get instant and tailored <Em>interview answers</Em>
                <Br /> during your interviews with our AI copilot <Br />{' '}
                to help you ace your next job interview.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <Image 
                  src="/static/images/openailogo.png" 
                  width={100} 
                  height={20} 
                  alt="OpenAI Logo" 
                />
                <Image 
                  src="/static/images/whisperlogo.png" 
                  width={110} 
                  height={20} 
                  alt="Whisper Logo" 
                />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" color="black" size="lg" href="https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009" fontWeight="bold">
                  Download
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="#features"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Learn More
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>

          {/* Video container - above for mobile, right for desktop */}
          <Box
            width={{ base: "100%", lg: "50%" }}
            height={{ base: "400px", md: "500px", lg: "600px" }}
            position={{ base: "relative", lg: "relative" }}  // Changed to relative for all views
            display="block"
            order={{ base: 1, lg: 2 }}
            mb={{ base: 16, sm: 16, md: 12, lg: 0 }}  // Increased bottom margin for mobile views
          >
            <FallInPlace delay={1}>
              <Box 
                overflow="hidden" 
                height="100%" 
                display="flex" 
                justifyContent="center"
                alignItems="center"
              >
                <video
                  src="/static/screenshots/phone2.mp4"
                  width={350}
                  height={762}
                  style={{ 
                    width: '100%',
                    maxWidth: '350px',
                    height: 'auto',
                    objectFit: "contain"
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="40"
        sx={{
          ".chakra-heading": { fontSize: "2xl" },
          ".chakra-text": { fontSize: "lg" }
        }}
        features={[
          {
            title: '1s Responses',
            icon: FiZap,
            description: 'Copilot generates responses instantly, ensuring you always have the answer in an interview.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: '99% Accuracy',
            icon: FiHeadphones,
            description:
              'Interview Pilot uses the ranked No. 1 ASR technology for speech recognition.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: '99+ Languages',
            icon: FiGlobe,
            description:
              'Supports over 99 languages, Copilot automatically generates responses in your language.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Full Privacy',
            icon: FiShield,
            description:
              'No audio is saved or sent. All audio is processed locally on device, so your information is always safe.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('#interviewpilot')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Accurate. Instant. Tailored.">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Ace any technical or behavioral questions with <Em>our most intelligent Copilot model</Em>.
            Upload your resume, job details and more for <Em>full Copilot customization</Em>.
            Choose your desired Copilot answer style, and review all your past interviews in one place.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                shareyoursuccess
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                #interviewpilot
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Voice Recognition">
        <Text color="muted" fontSize="lg">
          Ranked 1st in speech recognition worldwide, Whisper technology is ranked the world&apos;s most accurate AI speech recognition (ASR), capable of detecting almost all languages and accents.
        </Text>
      </HighlightsItem>
      <HighlightsItem title="Full Privacy">
        <Text color="muted" fontSize="lg">
          All audio processing happens and stays on-device. No audio is sent to servers. All API calls are anonymous and encrypted to industry standards.
        </Text>
      </HighlightsItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Get Ahead of Your Peers"
      >
        <Text color="muted" fontSize="lg">
          We take care of the trouble of recruiting and interviewing, so you can focus on what really matters: growing your skillset and career.
        </Text>
        <Wrap mt="8">
          {[
'product management',
'data science',
'software engineering',
'graphic design',
'copywriting',
'sales',
'recruiting',
'customer success',
'finance',
'operations',
'legal',
'marketing',
'public relations',
'business development',
'human resources',
'project management',
'strategy',
'analytics',

          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="yellow"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
          className="main-title"
          sx={{ 
            fontSize: {base: '2xl', md: '3xl', lg: '4xl'} 
          }}
        >
          How to Use
          <Br />3 Simple Steps
        </Heading>
      }
      description={
        <>
          Fully Customizable. Completely fuss-free and easy to use.
          <Br />
          Fully Undetectable.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      spacing={14}
      sx={{
        ".chakra-simple-grid": { 
          rowGap: "4rem" // Add extra space between rows
        }
      }}
      features={[
        {
          title: <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={3}>Step 1</Text>,
          icon: FiSmile,
          description: (
            <>
              <Br />
              Upload your resume. Add details about yourself. Copilot will learn to tailor answers to you.
            </>
          ),
          variant: 'inline',
        },
        {
          title: <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={3}>Step 2</Text>,
          icon: FiBriefcase,
          description: (
            <>
              <Br />
              Enter the job description, company info, and anything else you want Copilot to know.
            </>
          ),
          variant: 'inline',
        },
        {
          title: <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={3}>Step 3</Text>,
          icon: FiBox,
          description: (
            <>
              <Br />
              Choose a response style, depending on what fits you best: Key Points, Concise, Standard, Detailed.
            </>
          ),
          variant: 'inline',
        },
        {
          title: <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={3}>Interview</Text>,
          icon: FiMic,
          description: (
            <>
              <Br />
              Hit Record to detect question. Hit Generate to get answer. Ace the interview.
            </>
          ),
          variant: 'inline',
        },
        {
          title: <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={3}>Review</Text>,
          icon: FiFlag,
          description: (
            <>
              <Br />
              Save and review all your past interviews to learn. Unlimited file history.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)
        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      id="testimonials"
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial 
                key={i} 
                {...t} 
                height="100%"
                // These props ensure consistent heights within the grid
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Prices may differ slightly depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home