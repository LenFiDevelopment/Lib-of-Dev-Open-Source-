// UI Component Libraries and Design Systems

export const uiFrameworks = {
  shadcn: {
    id: 'shadcn',
    name: 'shadcn/ui',
    icon: '🎨',
    color: '#000000',
    category: 'Design System',
    description: 'Beautifully designed components built with Radix UI and Tailwind CSS',
    details: {
      what: 'shadcn/ui is a collection of re-usable components that you can copy and paste into your apps. Not a component library - you own the code.',
      when: 'Use shadcn/ui when building modern web applications with React and wanting full control over component styling.',
      why: 'Accessible, customizable, open source components. Copy the code, not install a dependency. Built on Radix UI primitives with Tailwind CSS.',
    },
    features: [
      'Accessible components built on Radix UI',
      'Customizable with Tailwind CSS',
      'Copy/paste components - you own the code',
      'TypeScript support',
      'Dark mode built-in',
      'Fully responsive',
      'Server-side rendering ready',
      'No dependency lock-in',
    ],
    installation: {
      title: 'Installation',
      steps: [
        {
          step: 'Initialize shadcn/ui',
          code: `npx shadcn-ui@latest init`,
          description: 'Run the CLI to set up your project',
        },
        {
          step: 'Add components',
          code: `npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog`,
          description: 'Add individual components as needed',
        },
      ],
    },
    components: [
      {
        name: 'Button',
        description: 'A button component with multiple variants',
        code: `import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`,
        variants: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      },
      {
        name: 'Card',
        description: 'A card component with header, content, and footer',
        code: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}`,
      },
      {
        name: 'Dialog',
        description: 'A modal dialog component',
        code: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`,
      },
      {
        name: 'Input',
        description: 'A text input component',
        code: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`,
      },
      {
        name: 'Select',
        description: 'A select dropdown component',
        code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
      },
      {
        name: 'Tabs',
        description: 'A tabs component for organizing content',
        code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Account content here
      </TabsContent>
      <TabsContent value="password">
        Password content here
      </TabsContent>
    </Tabs>
  )
}`,
      },
      {
        name: 'Toast',
        description: 'A toast notification component',
        code: `import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export default function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}`,
      },
      {
        name: 'Form',
        description: 'A form component with validation',
        code: `import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export default function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`,
      },
    ],
    designPrinciples: [
      {
        title: 'Accessible',
        description: 'Built on Radix UI primitives with full keyboard navigation and screen reader support',
        icon: '♿',
      },
      {
        title: 'Customizable',
        description: 'Styled with Tailwind CSS - easily customize colors, spacing, and more',
        icon: '🎨',
      },
      {
        title: 'Copy & Paste',
        description: 'Not a dependency - copy the code and make it yours',
        icon: '📋',
      },
      {
        title: 'Dark Mode',
        description: 'Dark mode support built-in with CSS variables',
        icon: '🌙',
      },
    ],
    themes: {
      default: {
        name: 'Default',
        colors: {
          background: 'hsl(0 0% 100%)',
          foreground: 'hsl(240 10% 3.9%)',
          primary: 'hsl(240 5.9% 10%)',
          secondary: 'hsl(240 4.8% 95.9%)',
          accent: 'hsl(240 4.8% 95.9%)',
          destructive: 'hsl(0 84.2% 60.2%)',
        },
      },
      dark: {
        name: 'Dark',
        colors: {
          background: 'hsl(240 10% 3.9%)',
          foreground: 'hsl(0 0% 98%)',
          primary: 'hsl(0 0% 98%)',
          secondary: 'hsl(240 3.7% 15.9%)',
          accent: 'hsl(240 3.7% 15.9%)',
          destructive: 'hsl(0 62.8% 30.6%)',
        },
      },
    },
    links: {
      website: 'https://ui.shadcn.com',
      docs: 'https://ui.shadcn.com/docs',
      github: 'https://github.com/shadcn-ui/ui',
      examples: 'https://ui.shadcn.com/examples',
    },
  },

  tailwindcss: {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    icon: '💨',
    color: '#06B6D4',
    category: 'CSS Framework',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces',
    details: {
      what: 'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all the building blocks you need.',
      when: 'Use Tailwind when you want rapid development with utility classes instead of writing custom CSS.',
      why: 'Faster development, smaller CSS bundles, consistent design system, and highly customizable.',
    },
    features: [
      'Utility-first approach',
      'Responsive design utilities',
      'Dark mode support',
      'JIT (Just-In-Time) compiler',
      'Customizable via config file',
      'Plugin ecosystem',
      'PurgeCSS integration',
      'IntelliSense support',
    ],
    installation: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
    examples: [
      {
        title: 'Button Styles',
        code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>

<button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent rounded py-2 px-4">
  Outline Button
</button>`,
      },
      {
        title: 'Card Layout',
        code: `<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
  <img className="w-full" src="/img.jpg" alt="Sunset" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-gray-700 dark:text-gray-300 text-base">
      Card content goes here
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tag
    </span>
  </div>
</div>`,
      },
      {
        title: 'Responsive Grid',
        code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-white p-6 rounded-lg shadow">Item 1</div>
  <div className="bg-white p-6 rounded-lg shadow">Item 2</div>
  <div className="bg-white p-6 rounded-lg shadow">Item 3</div>
</div>`,
      },
    ],
    links: {
      website: 'https://tailwindcss.com',
      docs: 'https://tailwindcss.com/docs',
      playground: 'https://play.tailwindcss.com',
    },
  },

  radixui: {
    id: 'radixui',
    name: 'Radix UI',
    icon: '⚛️',
    color: '#8B5CF6',
    category: 'UI Primitives',
    description: 'Unstyled, accessible components for building high-quality design systems',
    details: {
      what: 'Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience.',
      when: 'Use Radix UI when you need accessible components but want full control over styling.',
      why: 'WAI-ARIA compliant, fully typed with TypeScript, unstyled for complete design freedom.',
    },
    features: [
      'Fully accessible (WAI-ARIA)',
      'Unstyled and customizable',
      'TypeScript support',
      'Composable components',
      'Server-side rendering',
      'Keyboard navigation',
      'Focus management',
      'Portals and layers',
    ],
    components: [
      {
        name: 'Dialog',
        code: `import * as Dialog from '@radix-ui/react-dialog';

<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Description>
        Dialog description
      </Dialog.Description>
      <Dialog.Close>Close</Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>`,
      },
      {
        name: 'Dropdown Menu',
        code: `import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

<DropdownMenu.Root>
  <DropdownMenu.Trigger>Options</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>Edit</DropdownMenu.Item>
    <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>`,
      },
    ],
    links: {
      website: 'https://www.radix-ui.com',
      docs: 'https://www.radix-ui.com/docs/primitives',
      github: 'https://github.com/radix-ui/primitives',
    },
  },
};

export const getAllUIFrameworks = () => Object.values(uiFrameworks);
export const getUIFrameworkById = (id) => uiFrameworks[id];
