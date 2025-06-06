
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Professional NSS brand colors
				nethra: {
					navy: '#002E53',
					blue: '#0A416B',
					light: '#F8FAFC',
					gray: '#64748B',
					accent: '#38BDF8',
					gold: '#F59E0B',
					platinum: '#E5E7EB',
					charcoal: '#1F2937'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1rem',
				'2xl': '1.5rem',
				'3xl': '2rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-up': 'slide-up 1s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'shimmer': 'shimmer 2.5s infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Montserrat', 'sans-serif']
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '0.75rem' }],
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.4rem' }],
				'base': ['1rem', { lineHeight: '1.7rem' }],
				'lg': ['1.125rem', { lineHeight: '1.8rem' }],
				'xl': ['1.25rem', { lineHeight: '1.9rem' }],
				'2xl': ['1.5rem', { lineHeight: '2.2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.4rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.7rem' }],
				'5xl': ['3rem', { lineHeight: '3.2rem' }],
				'6xl': ['3.75rem', { lineHeight: '4rem' }],
				'7xl': ['4.5rem', { lineHeight: '4.8rem' }],
				'8xl': ['6rem', { lineHeight: '6.4rem' }],
				'9xl': ['8rem', { lineHeight: '8.4rem' }]
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'88': '22rem',
				'128': '32rem'
			},
			boxShadow: {
				'premium': '0 20px 40px -12px rgba(0, 46, 83, 0.08), 0 8px 16px -8px rgba(0, 46, 83, 0.06)',
				'premium-lg': '0 32px 64px -12px rgba(0, 46, 83, 0.15), 0 16px 32px -8px rgba(0, 46, 83, 0.1)',
				'glow': '0 0 30px rgba(56, 189, 248, 0.3)',
				'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-professional': 'linear-gradient(135deg, #002E53 0%, #0A416B 50%, #38BDF8 100%)',
				'gradient-premium': 'linear-gradient(135deg, #002E53 0%, #0A416B 30%, #38BDF8 70%, #0EA5E9 100%)',
				'gradient-subtle': 'linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
