import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Shield, CheckCircle, ArrowRight, Instagram, Linkedin, MessageCircle, Hash } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'cyberknight@tips.edu.pk',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+92 (321) 456-7890',
      description: 'Mon-Fri from 9am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'TIPS Campus, Karachi, Pakistan',
      description: 'Our main campus location'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon-Fri: 9AM-5PM',
      description: 'Always here to help'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@cyberknight_tips',
      url: 'https://instagram.com/cyberknight_tips',
      color: 'from-pink-500 to-purple-500',
      description: 'Follow our latest updates and behind-the-scenes content'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Cyber Knight TIPS',
      url: 'https://linkedin.com/company/cyberknight-tips',
      color: 'from-blue-600 to-blue-700',
      description: 'Connect with us professionally and see our achievements'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp Group',
      handle: 'Join Community',
      url: 'https://chat.whatsapp.com/cyberknight-tips-community',
      color: 'from-green-500 to-green-600',
      description: 'Join our active community for discussions and updates'
    },
    {
      icon: Hash,
      name: 'Discord Server',
      handle: 'Cyber Knight Hub',
      url: 'https://discord.gg/cyberknight-tips',
      color: 'from-indigo-500 to-purple-600',
      description: 'Real-time chat, study groups, and collaborative learning'
    }
  ];

  const departments = [
    { 
      icon: MessageSquare, 
      name: 'General Inquiry', 
      description: 'General questions about Cyber Knight',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      icon: Users, 
      name: 'Membership', 
      description: 'Join our cybersecurity community',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Shield, 
      name: 'Technical Support', 
      description: 'Help with courses and platform',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Mail, 
      name: 'Collaboration', 
      description: 'Partnership opportunities',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How can I join Cyber Knight?',
      answer: 'You can join by attending our orientation sessions or contacting us directly. We welcome all TIPS students interested in cybersecurity.'
    },
    {
      question: 'Are the courses free for members?',
      answer: 'Yes! All courses and workshops are completely free for Cyber Knight members. We believe in accessible cybersecurity education.'
    },
    {
      question: 'Do you offer certifications?',
      answer: 'Yes, we provide certificates of completion for all courses and special recognition for outstanding performance in competitions.'
    },
    {
      question: 'Can I contribute to the club activities?',
      answer: 'Absolutely! We encourage members to lead workshops, contribute to research projects, and participate in community outreach programs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Get in{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Ready to join the defenders? Have questions about our programs? 
            We're here to help you start your cybersecurity journey.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 text-center">
                  {item.info}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Connect with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Community
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join our vibrant community across multiple platforms and stay updated with the latest in cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <social.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    {social.name}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {social.handle}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {social.description}
                  </p>
                  
                  <div className="mt-4">
                    <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${social.color} text-white text-sm font-medium rounded-lg group-hover:shadow-lg transition-all duration-300`}>
                      Join Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Can We{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Help You?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the department that best matches your inquiry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${dept.color} group-hover:h-4 transition-all duration-300`}></div>
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${dept.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <dept.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {dept.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Connect with Cyber Knight?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-2 flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Join Our Community
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Become part of TIPS' premier cybersecurity community and connect with like-minded defenders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-2 flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Expert Guidance
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Get mentorship from experienced members and industry professionals in cybersecurity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2 flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Collaboration Opportunities
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Partner with us on research projects, workshops, and community outreach programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fadeInRight">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-6">Quick Response Guarantee</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Expert guidance available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Multiple contact channels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Community support network</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center space-x-2 text-blue-100">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm">Average response time: 4 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Quick answers to common questions about Cyber Knight
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Still have questions? We're here to help!
            </p>
            <a
              href="mailto:cyberknight@tips.edu.pk"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Contact Us Directly
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;