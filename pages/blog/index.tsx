import { Box, Container, Heading, Text, VStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import fs from 'fs'
import path from 'path'

interface BlogPost {
  id: string
  title: string
  preview: string
}

export async function getStaticProps() {
  const blogDirectory = path.join(process.cwd(), 'pages/blog')
  const filenames = fs.readdirSync(blogDirectory)
  const blogPosts = filenames
    .filter(filename => filename.endsWith('.tsx') && filename !== 'index.tsx')
    .map(filename => {
      const filePath = path.join(blogDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const title = fileContents.match(/<Heading[^>]*>([^<]+)<\/Heading>/)?.[1] || 'Untitled'
      const preview = fileContents.match(/<Text[^>]*>([^<]+)<\/Text>/)?.[1] || 'No preview available'
      return {
        id: filename.replace('.tsx', ''),
        title,
        preview,
      }
    })

  return {
    props: {
      blogPosts,
    },
  }
}

export default function BlogPage({ blogPosts }) {
  return (
    <Container maxW="container.md" py={16} mt={10}>
      <Heading as="h1" size="xl" mb={6} pt={8}>
        Blog
      </Heading>
      <VStack spacing={6} align="stretch">
        <Text>
          Welcome to our blog. Here you will find the latest updates, tips, and insights related to Interview Pilot.
        </Text>
        
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h2" size="lg" mb={2}>
                <Link as={NextLink} href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </Heading>
              <Text>
                {post.preview}
              </Text>
            </Box>
          ))
        ) : (
          <Text>No blog posts available.</Text>
        )}
      </VStack>
    </Container>
  )
} 