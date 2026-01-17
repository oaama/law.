import { siteConfig } from '@/config/site.config';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div
      className="p-8 rounded-lg shadow-elegant hover:shadow-card transition-all duration-300 card-hover animate-fadeInUp"
      style={{ backgroundColor: siteConfig.colors.background.white, borderTop: `4px solid ${siteConfig.colors.secondary}` }}
    >
      <div className="text-4xl mb-4 animate-float">{getIconEmoji(icon)}</div>
      <h3 className="text-2xl font-bold mb-3 font-amiri transition-colors duration-300" style={{ color: siteConfig.colors.primary }}>
        {title}
      </h3>
      <p style={{ color: siteConfig.colors.text.secondary }} className="leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function getIconEmoji(icon: string): string {
  const icons: { [key: string]: string } = {
    scales: '⚖️',
    home: '👨‍👩‍👧‍👦',
    briefcase: '💼',
    building: '🏢',
  };
  return icons[icon] || '📋';
}
