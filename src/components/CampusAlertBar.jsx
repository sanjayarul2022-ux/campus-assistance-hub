import React from 'react';
import { Bell, Radio } from 'lucide-react';

/**
 * CampusAlertBar Component
 * Demonstrates dynamic props passed from Parent Class Component's lifecycle timer.
 */
export default function CampusAlertBar({ announcement, index, total }) {
  return (
    <div className="hub-alert-bar" role="region" aria-label="Campus Announcements">
      <div className="alert-bar-inner">
        <div className="alert-pill">
          <Radio size={12} className="animate-pulse" />
          <span>CAMPUS NOTICE</span>
        </div>

        <div className="alert-text-carousel" key={index}>
          {announcement}
        </div>

        <span className="alert-lifecycle-tag" title="Demonstrates React Lifecycle interval updates">
          Notice {index + 1}/{total} • Realtime Feed
        </span>
      </div>
    </div>
  );
}
