import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';
import { useLocation } from 'react-router-dom';

const POSTS = [
  {
    id: '1',
    user: {
      name: 'Andrea López',
      profileImage: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=200',
    },
    content: '¡Amo mi nuevo corte de cabello! Gracias a Elite Hair Studio por hacerlo posible 😍',
    image: 'https://images.unsplash.com/photo-1558211583-c6d1d3d83dc0?auto=format&fit=crop&q=80&w=1000',
    likes: 34,
    comments: 5,
    timeAgo: 'Hace 2 horas',
  },
  {
    id: '2',
    user: {
      name: 'Carlos Ramírez',
      profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
    },
    content: '¡Recomiendo el Pure Bliss Spa! Sus masajes son increíbles y súper relajantes 💆‍♂️',
    image: 'https://images.unsplash.com/photo-1573497019415-a120e34e62ce?auto=format&fit=crop&q=80&w=1000',
    likes: 21,
    comments: 3,
    timeAgo: 'Hace 1 día',
  },
  {
    id: 'promo1',
    salon: {
      name: 'Elite Hair Studio',
      profileImage: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=200',
    },
    content: '¡Promoción de temporada! 20% de descuento en todos los cortes hasta fin de mes 🎉',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1000',
    likes: 18,
    comments: 2,
    timeAgo: 'Hace 3 horas',
    isPromotion: true,
  },
  {
    id: 'promo2',
    salon: {
      name: 'Pure Bliss Spa',
      profileImage: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=200',
    },
    content: '¡Día de spa en descuento! 15% en tratamientos faciales solo este viernes 🌿',
    image: 'https://images.unsplash.com/photo-1556228724-4b1aa8818dba?auto=format&fit=crop&q=80&w=1000',
    likes: 30,
    comments: 7,
    timeAgo: 'Hace 1 día',
    isPromotion: true,
  },
];

export function Community() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header con color dinámico */}
      <div
        className={`py-4 px-6 shadow-md ${
          location.pathname === '/community'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-100 text-gray-700'
        }`}
      >
        <h1 className="text-xl font-bold">Comunidad</h1>
      </div>

      {/* Feed de publicaciones */}
      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {POSTS.map((post) => (
          <React.Fragment key={post.id}>
            {/* Publicación del usuario o promoción del salón */}
            <div className={`bg-white shadow-sm rounded-lg p-4 border ${post.isPromotion ? 'border-yellow-400' : 'border-gray-200'}`}>
              {/* Header de la publicación */}
              <div className="flex items-center space-x-3">
                <img
                  src={post.salon ? post.salon.profileImage : post.user.profileImage}
                  alt={post.salon ? post.salon.name : post.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{post.salon ? post.salon.name : post.user.name}</p>
                  <p className="text-xs text-gray-500">{post.timeAgo}</p>
                </div>
              </div>

              {/* Contenido de la publicación */}
              <div className="mt-4">
                <p className="text-gray-800">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Publicación"
                    className="mt-4 rounded-lg w-full object-cover"
                  />
                )}
              </div>

              {/* Interacciones */}
              <div className="flex justify-between items-center mt-4 text-gray-500">
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes} Me gusta</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments} Comentarios</span>
                </button>
              </div>
            </div>

            {/* Anuncio intercalado entre publicaciones */}
            {post.id === '1' && (
              <AdBanner type="sponsored" className="my-4" />
            )}
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}
