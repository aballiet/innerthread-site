"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ExplainerProps {
  children: ReactNode;
  notes?: { title: string; text: string }[];
}

export function FeatureExplainer({ children, notes }: ExplainerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.88rem',
          fontWeight: 500,
          color: '#c8723a',
          padding: '0.4rem 0',
          fontFamily: 'Inter, -apple-system, sans-serif',
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: 'transform 200ms ease',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        How does this work?
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                marginTop: '1rem',
                padding: '1.5rem',
                background: '#ffffff',
                border: '1px solid #e8e5df',
                borderRadius: '20px',
              }}
            >
              {/* Animation */}
              <div style={{ marginBottom: notes?.length ? '1.5rem' : 0 }}>
                {children}
              </div>

              {/* Annotated notes */}
              {notes && notes.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    borderTop: '1px solid #e8e5df',
                    paddingTop: '1rem',
                  }}
                >
                  {notes.map((note, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                      <span
                        style={{
                          flexShrink: 0,
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: '#c8723a',
                          background: 'rgba(200, 114, 58, 0.1)',
                          padding: '0.15em 0.5em',
                          borderRadius: '9999px',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {note.title}
                      </span>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          color: '#6b6560',
                          lineHeight: 1.55,
                        }}
                      >
                        {note.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
