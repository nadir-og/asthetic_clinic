import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypewriterText({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = '',
  cursorClassName = 'inline-block w-[2.5px] h-[0.85em] bg-current ml-1.5 align-middle animate-pulse',
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    
    const currentWord = words[wordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && displayedText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        currentWord.substring(0, displayedText.length + (isDeleting ? -1 : 1))
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <>
      <span className={className}>{displayedText}</span>
      <span className={cursorClassName} />
    </>
  );
}
